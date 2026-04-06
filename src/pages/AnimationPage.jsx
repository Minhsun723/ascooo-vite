// src/pages/AnimationPage.jsx
import Layout from '../components/Layout'
import '../styles/pages.css'

// 佔位卡片資料 — 之後替換成真實內容
const ITEMS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `動畫作品 ${i + 1}`,
  img: `https://picsum.photos/seed/anim${i}/400/560`,
  href: '#',
}))

export default function AnimationPage() {
  return (
    <Layout>
      {/* Banner */}
      <div className="page-banner">
        <img
          className="page-banner-bg"
          src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop"
          alt="動畫"
        />
        <div className="page-banner-content">
          <span className="page-banner-en">Animation</span>
          <h1 className="page-banner-title">動畫</h1>
        </div>
      </div>

      {/* 內容 */}
      <div className="page-body wide">
        <div className="section-heading fade-in-up">
          <span className="en">ALL WORKS</span>
          <span className="ja">所有作品</span>
        </div>

        <div className="card-grid">
          {ITEMS.map((item, i) => (
            <a
              key={item.id}
              href={item.href}
              className="grid-card fade-in-up"
              style={{ animationDelay: `${0.05 * i}s` }}
            >
              <div className="card-image-wrapper">
                <img src={item.img} alt={item.title} />
              </div>
              <p className="card-title">{item.title}</p>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  )
}
