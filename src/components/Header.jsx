// src/components/Header.jsx
import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

export default function Header({ onMenuOpen }) {
  const { lang, t, config } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const [mobileLangOpen, setMobileLangOpen] = useState(false)
  const langSwitcherRef = useRef(null)
  const mobileLangRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e) => {
      if (mobileLangRef.current && !mobileLangRef.current.contains(e.target)) {
        setMobileLangOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  const handleLangSwitch = (e, path) => {
    e.preventDefault()
    setLangMenuOpen(false)
    setMobileLangOpen(false)
    navigate(path)
  }

  // 語系前綴
  const prefix = lang === 'zh-TW' ? '' : `/${lang === 'ja' ? 'ja' : 'en'}`

  const navLinks = [
    { key: 'animation', label: t.nav.animation, to: `${prefix}/animation` },
    { key: 'games',     label: t.nav.games,     to: `${prefix}/games` },
    { key: 'music',     label: t.nav.music,     to: `${prefix}/music` },
    { key: 'events',    label: t.nav.events,    to: `${prefix}/events` },
    { key: 'about',     label: t.nav.about,     to: `${prefix}/about` },
    { key: 'contact',   label: t.nav.contact,   to: `${prefix}/contact` },
    ...(t.nav.shop ? [{ key: 'shop', label: t.nav.shop, href: 'https://shop.ascooo.com/', external: true }] : []),
  ]

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav>
        {/* Logo */}
        <Link to={`${prefix}/`} className="logo">
          <img src="/images/logo_white_cut.svg" alt="公司品牌Logo (淺色)" className="logo-initial" />
          <img src="/images/logo_black_cut.svg" alt="公司品牌Logo (深色)" className="logo-scrolled" />
        </Link>

        {/* 桌面版導覽 */}
        <ul className="desktop-nav">
          {navLinks.map(link => (
            <li key={link.key}>
              {link.external ? (
                <a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
              ) : (
                <NavLink to={link.to}>{link.label}</NavLink>
              )}
            </li>
          ))}

          {/* 桌面版語言切換 */}
          <li
            className="language-switcher"
            ref={langSwitcherRef}
            onMouseEnter={() => setLangMenuOpen(true)}
            onMouseLeave={() => setLangMenuOpen(false)}
          >
            <a
              href="#"
              className="language-toggle-btn"
              aria-label={t.lang.switchLabel}
              aria-haspopup="true"
              aria-expanded={langMenuOpen}
              onClick={e => e.preventDefault()}
            >
              <i className="fas fa-globe" />
            </a>
            <ul className={`language-menu${langMenuOpen ? ' show' : ''}`}>
              {config.map(c => (
                <li key={c.code}>
                  <a
                    href={c.path}
                    className={lang === c.code ? 'active' : ''}
                    onClick={e => handleLangSwitch(e, c.path)}
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* 手機版右側按鈕 */}
        <div className="mobile-nav-buttons">
          <div className="mobile-language-switcher" ref={mobileLangRef}>
            <a
              href="#"
              className="language-toggle-btn-mobile"
              aria-label={t.lang.switchLabel}
              aria-expanded={mobileLangOpen}
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                setMobileLangOpen(v => !v)
              }}
            >
              <i className="fas fa-globe" />
            </a>
            <ul className={`language-menu-mobile${mobileLangOpen ? ' show' : ''}`}>
              {config.map(c => (
                <li key={c.code}>
                  <a
                    href={c.path}
                    className={lang === c.code ? 'active' : ''}
                    onClick={e => handleLangSwitch(e, c.path)}
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="menu-toggle-btn"
            aria-label={t.mobileMenu.open}
            onClick={onMenuOpen}
          >
            <i className="fas fa-bars menu-icon-open" />
          </button>
        </div>
      </nav>
    </header>
  )
}
