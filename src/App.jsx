// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage      from './pages/HomePage'
import AnimationPage from './pages/AnimationPage'
import GamesPage     from './pages/GamesPage'
import MusicPage     from './pages/MusicPage'
import EventsPage    from './pages/EventsPage'
import AboutPage     from './pages/AboutPage'
import ContactPage   from './pages/ContactPage'
import PrivacyPage   from './pages/PrivacyPage'
import TermsPage     from './pages/TermsPage'

// 為多語系產生路由的輔助函式
function LangRoutes({ prefix }) {
  const p = prefix // '' | '/en' | '/ja'
  return (
    <>
      <Route path={`${p}/`}          element={<HomePage />} />
      <Route path={`${p}/animation`} element={<AnimationPage />} />
      <Route path={`${p}/games`}     element={<GamesPage />} />
      <Route path={`${p}/events`}    element={<EventsPage />} />
      <Route path={`${p}/about`}     element={<AboutPage />} />
      <Route path={`${p}/contact`}   element={<ContactPage />} />
      <Route path={`${p}/privacy`}   element={<PrivacyPage />} />
      <Route path={`${p}/terms`}     element={<TermsPage />} />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 繁體中文（根路徑） */}
        <Route path="/"           element={<HomePage />} />
        <Route path="/animation"  element={<AnimationPage />} />
        <Route path="/games"      element={<GamesPage />} />
        <Route path="/music"      element={<MusicPage />} />
        <Route path="/events"     element={<EventsPage />} />
        <Route path="/about"      element={<AboutPage />} />
        <Route path="/contact"    element={<ContactPage />} />
        <Route path="/privacy"    element={<PrivacyPage />} />
        <Route path="/terms"      element={<TermsPage />} />

        {/* 英文版 */}
        <Route path="/en"           element={<HomePage />} />
        <Route path="/en/animation" element={<AnimationPage />} />
        <Route path="/en/games"     element={<GamesPage />} />
        <Route path="/en/music"     element={<MusicPage />} />
        <Route path="/en/events"    element={<EventsPage />} />
        <Route path="/en/about"     element={<AboutPage />} />
        <Route path="/en/contact"   element={<ContactPage />} />
        <Route path="/en/privacy"   element={<PrivacyPage />} />
        <Route path="/en/terms"     element={<TermsPage />} />

        {/* 日文版 */}
        <Route path="/ja"           element={<HomePage />} />
        <Route path="/ja/animation" element={<AnimationPage />} />
        <Route path="/ja/games"     element={<GamesPage />} />
        <Route path="/ja/music"     element={<MusicPage />} />
        <Route path="/ja/events"    element={<EventsPage />} />
        <Route path="/ja/about"     element={<AboutPage />} />
        <Route path="/ja/contact"   element={<ContactPage />} />
        <Route path="/ja/privacy"   element={<PrivacyPage />} />
        <Route path="/ja/terms"     element={<TermsPage />} />

        {/* 其他路徑導回首頁 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
