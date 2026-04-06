// src/i18n/translations.js

export const translations = {
  'zh-TW': {
    nav: {
      animation: '動畫',
      games: '遊戲',
      music: '音樂',
      events: '活動',
      about: '關於我們',
      contact: '聯絡資訊',
      shop: '非常好購物',
    },
    hero: {
      text: '',
    },
    showcase: {
      viewAll: '查看全部',
      contentLabel: '內文',
    },
    footer: {
      socialTitle: '官方社群帳號',
      links: {
        contact: '聯絡我們',
        about: '關於本站',
        privacy: '隱私權政策',
        terms: '使用者條款',
      },
      copyright: '© 2026 Ascooo. All rights reserved.',
      pageTop: '頁首',
    },
    mobileMenu: {
      open: '開啟選單',
      close: '關閉選單',
    },
    lang: {
      switchLabel: '切換語言',
    },
  },
  en: {
    nav: {
      animation: 'Animation',
      games: 'Games',
      music: 'Music',
      events: 'Events',
      about: 'About Us',
      contact: 'Contact',
      shop: 'Shop',
    },
    hero: {
      text: 'Under Maintenance...',
    },
    showcase: {
      viewAll: 'View All',
      contentLabel: '',
    },
    footer: {
      socialTitle: 'Official Social Accounts',
      links: {
        contact: 'Contact Us',
        about: 'About This Site',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
      },
      copyright: '© 2026 Ascooo. All rights reserved.',
      pageTop: 'Pagetop',
    },
    mobileMenu: {
      open: 'Open Menu',
      close: 'Close Menu',
    },
    lang: {
      switchLabel: 'Switch Language',
    },
  },
  ja: {
    nav: {
      animation: 'アニメーション',
      games: 'ゲーム',
      music: 'ミュージック',
      events: 'イベント',
      about: '私たちについて',
      contact: 'お問い合わせ',
      shop: 'ストア', // 日文版沒有購物連結
    },
    hero: {
      text: 'メンテナンス中...',
    },
    showcase: {
      viewAll: 'すべて見る',
      contentLabel: 'アニメ',
    },
    footer: {
      socialTitle: '公式ソーシャルアカウント',
      links: {
        contact: 'お問い合わせ',
        about: 'このサイトについて',
        privacy: 'プライバシーポリシー',
        terms: '利用規約',
      },
      copyright: '© 2026 Ascooo. All rights reserved.',
      pageTop: 'ページトップ',
    },
    mobileMenu: {
      open: 'メニューを開く',
      close: 'メニューを閉じる',
    },
    lang: {
      switchLabel: '言語切り替え',
    },
  },
}

export const langConfig = [
  { code: 'zh-TW', path: '/', label: '繁體中文' },
  { code: 'en',    path: '/en', label: 'English' },
  { code: 'ja',    path: '/ja', label: '日本語' },
]

// Hero video per language
export const heroVideos = {
  'zh-TW': '/images/logo_v3.mp4',
  en: '/images/logo_v2.mp4',
  ja: '/images/logo_v4.mp4',
}

// Showcase items (zh-TW has real content, others empty for now)
export const showcaseSections = {
  'zh-TW': [
    {
      titleEn: 'ANIMATION',
      titleLocal: '動畫',
      href: '/animation',
      items: [],
    },
    {
      titleEn: 'GAMES',
      titleLocal: '遊戲',
      href: '/games',
      items: [
        {
          href: 'https://ascooo.com/mcdonalds',
          img: '/images/mc_mine.jpg',
          alt: '麥當勞麥塊',
          title: '麥當勞盲盒模擬器',
        },
      ],
    },
    {
      titleEn: 'MUSIC',
      titleLocal: '音樂',
      href: '/music',
      items: [],
    },
    {
      titleEn: 'EVENTS',
      titleLocal: '活動',
      href: '/events',
      items: [],
    },
  ],
  en: [
    { titleEn: 'ANIMATION', titleLocal: 'Animation', href: '/en/animation', items: [] },
    { titleEn: 'GAMES',     titleLocal: 'Games',     href: '/en/games',     items: [] },
    { titleEn: 'MUSIC',     titleLocal: 'Music',     href: '/en/music',     items: [] },
    { titleEn: 'EVENTS',    titleLocal: 'Events',    href: '/en/events',    items: [] },
  ],
  ja: [
    { titleEn: 'ANIMATION', titleLocal: 'アニメ',       href: '/ja/animation', items: [] },
    { titleEn: 'GAMES',     titleLocal: 'ゲーム',       href: '/ja/games',     items: [] },
    { titleEn: 'MUSIC',     titleLocal: 'ミュージック',  href: '/ja/music',     items: [] },
    { titleEn: 'EVENTS',    titleLocal: 'イベント',     href: '/ja/events',    items: [] },
  ],
}
