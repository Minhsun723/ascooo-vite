# Ascooo — Vite + React

原本的純 HTML/CSS/JS 網站，重構為 **Vite + React** 架構。

## 專案結構

```
ascooo-react/
├── index.html              # Vite 入口 HTML
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx            # React 掛載入口
    ├── App.jsx             # BrowserRouter + Routes
    ├── styles/
    │   └── global.css      # 全域樣式（移植自 style.css）
    ├── i18n/
    │   └── translations.js # 多語系文字、Hero 影片、Showcase 資料
    ├── hooks/
    │   └── useLanguage.js  # 根據路徑判斷當前語系的 hook
    ├── components/
    │   ├── Header.jsx          # 導覽列（含語言切換）
    │   ├── MobileMenu.jsx      # 全螢幕手機選單
    │   ├── HeroSlideshow.jsx   # Hero 輪播（影片 + 圖片）
    │   ├── ShowcaseSection.jsx # 內容展示區（拖曳捲動）
    │   └── Footer.jsx          # 頁尾（含回頁首按鈕）
    └── pages/
        └── HomePage.jsx    # 主頁（組合所有元件）
```

## 多語系路由

| 語言    | 路徑     |
|---------|----------|
| 繁體中文 | `/`      |
| English | `/en`    |
| 日本語  | `/ja`    |

## 快速開始

```bash
# 安裝相依套件
npm install

# 啟動開發伺服器
npm run dev

# 打包建置
npm run build

# 預覽建置結果
npm run preview
```

## 圖片資源

請將原專案的 `images/` 資料夾放入 `public/images/`，Vite 會自動對應靜態路徑。

需要的檔案：
- `logo_white_cut.svg`
- `logo_black_cut.svg`
- `logo_black_cut_crop.ico`
- `ascooo_black_cut.svg`
- `logo_v2.mp4`（英文版 Hero 影片）
- `logo_v3.mp4`（中文版 Hero 影片）
- `logo_v4.mp4`（日文版 Hero 影片）
- `mc_mine.jpg`（麥當勞盲盒封面）

## 主要功能對應

| 原始功能                       | React 實作                        |
|-------------------------------|-----------------------------------|
| 捲動 header 變色               | `Header` 內 `useEffect` + scroll  |
| 全螢幕手機選單                 | `MobileMenu` 元件                 |
| 桌面 / 手機語言切換            | `Header` 內 state 控制            |
| Hero 輪播（影片 + 圖片）       | `HeroSlideshow` 元件              |
| Showcase 滑鼠拖曳捲動          | `ShowcaseSection` 內 useEffect    |
| Showcase 捲動進入動畫          | `ShowcaseSection` IntersectionObserver |
| 回頁首按鈕                     | `Footer` 元件                     |
| 多語系（zh-TW / en / ja）      | React Router + `useLanguage` hook |
