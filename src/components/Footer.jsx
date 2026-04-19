// src/components/Footer.jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

export default function Footer() {
  const { t, lang } = useLanguage()
  const [showTop, setShowTop] = useState(false)
  const prefix = lang === 'zh-TW' ? '' : `/${lang === 'ja' ? 'ja' : 'en'}`

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer>
      <div className="footer-main">
        <div className="footer-section">
          <h4>{t.footer.socialTitle}</h4>
          <div className="social-links">
            {[
              { icon: 'fa-youtube',   label: 'YouTube' },
              { icon: 'fa-tiktok',    label: 'TikTok' },
              { icon: 'fa-instagram', label: 'Instagram' },
              { icon: 'fa-line',      label: 'Line' },
              { icon: 'fa-twitter',   label: 'X' },
            ].map(s => (
              <a key={s.icon} href="#" aria-label={s.label} target="_blank" rel="noreferrer">
                <i className={`fa-brands ${s.icon}`} />
              </a>
            ))}
          </div>
        <nav className="footer-nav">
          <ul>
            <li><Link to={`${prefix}/contact`}>{t.footer.links.contact}</Link></li>
            <li><Link to={`${prefix}/about`}>{t.footer.links.about}</Link></li>
            <li><Link to={`${prefix}/privacy`}>{t.footer.links.privacy}</Link></li>
            <li><Link to={`${prefix}/terms`}>{t.footer.links.terms}</Link></li>
          </ul>
        </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logos">
          <Link to={`${prefix}/`}>
            <img src="/images/logo_black_cut.svg" alt="My Brand Logo" className="logo-main" />
          </Link>
          <Link to={`${prefix}/`}>
            <img src="/images/ascooo_black_cut.svg" alt="Partner Logo" className="logo-partner" />
          </Link>
        </div>
        <div className="copyright">
          <p>{t.footer.copyright}</p>
        </div>
      </div>

      <a
        href="#"
        id="pageTopBtn"
        className={`page-top-btn${showTop ? ' show' : ''}`}
        onClick={scrollToTop}
      >
        <i className="fas fa-chevron-up" />
        <span>{t.footer.pageTop}</span>
      </a>
    </footer>
  )
}
