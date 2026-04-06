// src/hooks/useLanguage.js
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { translations, langConfig } from '../i18n/translations'

export function useLanguage() {
  const { pathname } = useLocation()

  const lang = useMemo(() => {
    if (pathname.startsWith('/en')) return 'en'
    if (pathname.startsWith('/ja')) return 'ja'
    return 'zh-TW'
  }, [pathname])

  const t = translations[lang]
  const config = langConfig

  return { lang, t, config }
}
