// src/components/MobileMenu.jsx
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

export default function MobileMenu({ isOpen, onClose }) {
  const { lang, t } = useLanguage()
  const [musicOpen, setMusicOpen] = useState(false)

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

  const handleClose = () => {
    setMusicOpen(false)
    onClose()
  }

  return (
    <div className={`mobile-menu-panel${isOpen ? ' active' : ''}`}>
      <Link to={`${prefix}/`} className="logo mobile-menu-logo" onClick={handleClose}>
        <img src="/images/logo_black_cut.svg" alt="公司品牌Logo (深色)" style={{ height: '100%', position: 'static' }} />
      </Link>

      <button className="menu-close-btn" aria-label={t.mobileMenu.close} onClick={handleClose}>
        <i className="fas fa-times" />
      </button>

      <nav className="mobile-main-nav">
        <ul>
          {navLinks.map((link, index) => (
            link.key === 'music' ? (
              <li
                key={link.key}
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                className="mobile-music-item"
              >
                <div 
                  className="mobile-music-row" 
                  onClick={() => setMusicOpen(v => !v)} 
                  style={{ cursor: 'pointer' }}
                >
                  {/* 將 NavLink 改為 span，避免點擊時跳轉頁面 */}
                  <span className="mobile-music-label">
                    {link.label}
                  </span>
                  {/* 將 button 改為 div，因為點擊事件已經交由外層處理 */}
                  <div className={`mobile-music-toggle${musicOpen ? ' open' : ''}`}>
                    <i className="fas fa-chevron-down" />
                  </div>
                </div>

                <ul className={`mobile-music-submenu${musicOpen ? ' open' : ''}`}>
                  <li>
                    <NavLink to={link.to} onClick={handleClose}>
                      {t.nav.musicDropdown.works}
                    </NavLink>
                  </li>
                  <li>
                    {/* ↓ 可自行修改連結 */}
                    <a href="https://resonance.ascooo.com" target="_blank" rel="noreferrer" onClick={handleClose}>
                      {t.nav.musicDropdown.external}
                      <i className="fas fa-external-link-alt music-external-icon" />
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <li
                key={link.key}
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                {link.external ? (
                  <a href={link.href} target="_blank" rel="noreferrer" onClick={handleClose}>{link.label}</a>
                ) : (
                  <NavLink to={link.to} onClick={handleClose}>{link.label}</NavLink>
                )}
              </li>
            )
          ))}
        </ul>
      </nav>
    </div>
  )
}
