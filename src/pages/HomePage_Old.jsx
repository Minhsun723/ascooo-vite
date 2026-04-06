// src/pages/HomePage.jsx
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import MobileMenu from '../components/MobileMenu'
import HeroSlideshow from '../components/HeroSlideshow'
import ShowcaseSection from '../components/ShowcaseSection'
import Footer from '../components/Footer'
import { useLanguage } from '../hooks/useLanguage'
import { showcaseSections } from '../i18n/translations'

export default function HomePage() {
  const { lang, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const sections = showcaseSections[lang] || showcaseSections['zh-TW']

  // 開/關選單時，header 加上 menu-open class & body no-scroll
  useEffect(() => {
    const header = document.querySelector('header')
    const body   = document.body

    if (menuOpen) {
      body.classList.add('no-scroll')
      // 稍微延遲讓選單動畫先開始
      setTimeout(() => header?.classList.add('menu-open'), 100)
    } else {
      body.classList.remove('no-scroll')
      header?.classList.remove('menu-open')
    }

    return () => {
      body.classList.remove('no-scroll')
      header?.classList.remove('menu-open')
    }
  }, [menuOpen])

  return (
    <>
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <HeroSlideshow />

        <div className="showcase-wrapper">
          {sections.map((sec, i) => (
            <ShowcaseSection
              key={i}
              titleEn={sec.titleEn}
              titleLocal={sec.titleLocal}
              items={sec.items}
              viewAllLabel={t.showcase.viewAll}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
