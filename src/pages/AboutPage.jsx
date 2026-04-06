// src/pages/AboutPage.jsx
import Layout from '../components/Layout'
import '../styles/pages.css'

const VALUES = [
  {
    icon: 'fas fa-lightbulb',
    title: '創意',
    desc: '以獨特的視角與創意思維，打造令人難忘的作品與體驗。',
  },
  {
    icon: 'fas fa-heart',
    title: '熱情',
    desc: '對動畫、遊戲與創作充滿熱情，用心投入每一個細節。',
  },
  {
    icon: 'fas fa-users',
    title: '社群',
    desc: '重視與粉絲及社群的連結，共同創造屬於大家的文化。',
  },
]

export default function AboutPage() {
  return (
    <Layout>
      <div className="page-banner">
        <img
          className="page-banner-bg"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          alt="關於我們"
        />
        <div className="page-banner-content">
          <span className="page-banner-en">About Us</span>
          <h1 className="page-banner-title">關於我們</h1>
        </div>
      </div>

      <div className="page-body">
        {/* 簡介區 */}
        <div className="about-intro fade-in-up">
          <img
            className="about-intro-img"
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop"
            alt="關於 ascooo"
          />
          <div className="about-intro-text">
            <h2>我們是 ascooo</h2>
            <p>
              ascooo 是一個專注於動畫、遊戲與創意內容的品牌。我們相信好的內容能夠跨越語言與文化的界限，帶給每一位觀眾獨特的感動。
            </p>
            <p>
              從角色設計到互動遊戲，我們的團隊持續探索創作的各種可能，並積極與社群互動，讓每一個作品都充滿溫度與故事。
            </p>
            <p>
              未來，我們將持續拓展創作版圖，帶來更多精彩的作品與活動，歡迎一起加入 Ascooo 的世界。
            </p>
          </div>
        </div>

        {/* 價值觀 */}
        <div className="section-heading fade-in-up">
          <span className="en">OUR VALUES</span>
          <span className="ja">我們的理念</span>
        </div>

        <div className="about-values">
          {VALUES.map((v, i) => (
            <div key={i} className="value-card fade-in-up" style={{ animationDelay: `${0.1 * i}s` }}>
              <i className={v.icon} />
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
