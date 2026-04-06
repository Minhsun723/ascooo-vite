// src/components/ShowcaseSection.jsx
import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ShowcaseSection({ titleEn, titleLocal, items, viewAllLabel, href }) {
  const sectionRef = useRef(null)
  const sliderRef  = useRef(null)

  // IntersectionObserver: 進入視窗時加上 is-visible
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // 拖曳捲動
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let isDown = false
    let hasDragged = false
    let startX, scrollLeft
    let velocity = 0
    let animationFrameId
    let targetScrollLeft
    let velocityTracker = []

    const handleMouseDown = (e) => {
      if (e.offsetY > slider.clientHeight) return
      isDown = true
      hasDragged = false
      slider.classList.add('active')
      cancelAnimationFrame(animationFrameId)
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
      targetScrollLeft = scrollLeft
      velocity = 0
      velocityTracker = [{ time: Date.now(), x: e.pageX }]
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      animationFrameId = requestAnimationFrame(dragLoop)
    }

    const handleMouseMove = (e) => {
      if (!isDown) return
      e.preventDefault()
      const currentX = e.pageX
      const walk = currentX - startX
      targetScrollLeft = scrollLeft - walk
      const now = Date.now()
      velocityTracker.push({ time: now, x: currentX })
      while (now - velocityTracker[0].time > 100) velocityTracker.shift()
      if (Math.abs(walk) > 5) hasDragged = true
    }

    const handleMouseUp = () => {
      if (!isDown) return
      isDown = false
      slider.classList.remove('active')
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      cancelAnimationFrame(animationFrameId)

      const now = Date.now()
      while (velocityTracker.length > 0 && now - velocityTracker[0].time > 100) {
        velocityTracker.shift()
      }

      if (hasDragged && velocityTracker.length >= 2) {
        const first = velocityTracker[0]
        const last  = velocityTracker[velocityTracker.length - 1]
        const dTime = last.time - first.time
        if (dTime > 10) {
          velocity = ((last.x - first.x) / dTime) * (1000 / 60)
        } else {
          velocity = 0
        }
      } else {
        velocity = 0
      }

      const MAX_V = 120
      velocity = Math.max(-MAX_V, Math.min(MAX_V, velocity))
      if (Math.abs(velocity) > 1) {
        animationFrameId = requestAnimationFrame(momentumLoop)
      }
    }

    const dragLoop = () => {
      if (!isDown) return
      slider.scrollLeft += (targetScrollLeft - slider.scrollLeft) * 0.2
      animationFrameId = requestAnimationFrame(dragLoop)
    }

    const momentumLoop = () => {
      slider.scrollLeft -= velocity
      velocity *= 0.95
      if (Math.abs(velocity) > 0.5) {
        animationFrameId = requestAnimationFrame(momentumLoop)
      }
    }

    slider.addEventListener('mousedown', handleMouseDown)

    // 防止拖曳後點到連結
    const links = slider.querySelectorAll('.showcase-item')
    const preventDragClick = (e) => { if (hasDragged) e.preventDefault() }
    const preventDragStart = (e) => e.preventDefault()
    links.forEach(link => {
      link.addEventListener('dragstart', preventDragStart)
      link.addEventListener('click', preventDragClick)
    })

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      cancelAnimationFrame(animationFrameId)
      links.forEach(link => {
        link.removeEventListener('dragstart', preventDragStart)
        link.removeEventListener('click', preventDragClick)
      })
    }
  }, [items])

  return (
    <section className="showcase-section" ref={sectionRef}>
      <div className="showcase-panel">
        <div className="showcase-header">
          <h2 className="showcase-title">
            <span className="title-en">{titleEn}</span>
            <span className="title-local">{titleLocal}</span>
          </h2>
          <Link to={href || '#'} className="view-all-button">
            <span>{viewAllLabel}</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
        <div className="showcase-container" ref={sliderRef}>
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="showcase-item"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-image-wrapper">
                <img src={item.img} alt={item.alt} />
              </div>
              <p className="card-title">{item.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
