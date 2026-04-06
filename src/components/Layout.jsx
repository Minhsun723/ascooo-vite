// src/components/Layout.jsx
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import MobileMenu from './MobileMenu'
import Footer from './Footer'

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 瞬間回到頂部，避免切頁時產生不自然的滑動感
    })
  }, [pathname])

  useEffect(() => {
    const header = document.querySelector('header')
    const body = document.body
    if (menuOpen) {
      body.classList.add('no-scroll')
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
      <main>{children}</main>
      <Footer />
    </>
  )
}
