// src/components/MobileMenu.jsx
import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

export default function MobileMenu({ isOpen, onClose }) {
  const { lang, t } = useLanguage()

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
    <div className={`mobile-menu-panel${isOpen ? ' active' : ''}`}>
      <Link to={`${prefix}/`} className="logo mobile-menu-logo" onClick={onClose}>
        <img src="/images/logo_black_cut.svg" alt="公司品牌Logo (深色)" style={{ height: '100%', position: 'static' }} />
      </Link>

      <button className="menu-close-btn" aria-label={t.mobileMenu.close} onClick={onClose}>
        <i className="fas fa-times" />
      </button>

      <nav className="mobile-main-nav">
        <ul>
          {navLinks.map((link, index) => (
            <li 
              key={link.key}
              style={{ animationDelay: `${0.2 + index * 0.05}s` }}
            >
              {link.external ? (
                <a href={link.href} target="_blank" rel="noreferrer" onClick={onClose}>{link.label}</a>
              ) : (
                <NavLink to={link.to} onClick={onClose}>{link.label}</NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
