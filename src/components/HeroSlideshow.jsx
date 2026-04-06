// src/components/HeroSlideshow.jsx
import { useState, useEffect, useRef, useCallback } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { heroVideos } from '../i18n/translations'

const heroImages = [
  'https://images.unsplash.com/photo-1739989934229-fd878cc0a20e?q=80&w=2670&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1609147110688-83b5fd1288e8?q=80&w=2670&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1643719713572-691cd0ae06a2?q=80&w=2670&auto=format&fit=crop',
]

const DEFAULT_DURATION = 7000

export default function HeroSlideshow() {
  const { lang, t } = useLanguage()
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)
  const videoRef = useRef(null)

  const totalSlides = heroImages.length + 1 // video + images

  const clearTimer = useCallback(() => {
    clearTimeout(timerRef.current)
    clearInterval(timerRef.current)
  }, [])

  const goTo = useCallback((index) => {
    setCurrent(index)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrent(c => (c + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrent(c => (c - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  // 設定計時器
  useEffect(() => {
    clearTimer()

    if (current === 0 && videoRef.current) {
      const video = videoRef.current
      video.currentTime = 0
      video.play().catch(() => {})

      if (!video.loop) {
        const onEnded = () => setTimeout(() => nextSlide(), 50)
        video.addEventListener('ended', onEnded, { once: true })
        timerRef.current = setTimeout(nextSlide,
          Math.max(DEFAULT_DURATION, (video.duration * 1000 || DEFAULT_DURATION) + 500)
        )
        return () => {
          video.removeEventListener('ended', onEnded)
          clearTimer()
        }
      } else {
        timerRef.current = setTimeout(nextSlide, DEFAULT_DURATION)
      }
    } else {
      // 暫停上一個影片
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
      timerRef.current = setTimeout(nextSlide, DEFAULT_DURATION)
    }

    return () => clearTimer()
  }, [current, nextSlide, clearTimer])

  const slides = [
    { type: 'video', src: heroVideos[lang] },
    ...heroImages.map((src, i) => ({ type: 'image', src, alt: `Hero Image ${i + 1}` })),
  ]

  return (
    <section className="hero">
      <div className="hero-slideshow">
        {slides.map((slide, i) => (
          <div key={i} className={`hero-slide${i === current ? ' active' : ''}`}>
            {slide.type === 'video' ? (
              <video
                ref={i === 0 ? videoRef : null}
                playsInline
                muted
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <img src={slide.src} alt={slide.alt} />
            )}
          </div>
        ))}
      </div>

      {t.hero.text && (
        <div className="hero-text">
          <h1>{t.hero.text}</h1>
        </div>
      )}

      <div className="hero-nav">
        <button
          id="hero-prev"
          className="hero-nav-btn prev"
          aria-label="上一張幻燈片"
          onClick={() => { clearTimer(); prevSlide() }}
        >
          <span>PREV</span>
        </button>
        <button
          id="hero-next"
          className="hero-nav-btn next"
          aria-label="下一張幻燈片"
          onClick={() => { clearTimer(); nextSlide() }}
        >
          <span>NEXT</span>
        </button>
      </div>
    </section>
  )
}
