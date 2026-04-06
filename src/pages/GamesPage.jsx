// src/pages/GamesPage.jsx
import Layout from '../components/Layout'
import '../styles/pages.css'

const ITEMS = [
  {
    id: 1,
    title: '麥當勞盲盒模擬器',
    img: '/images/mc_mine.jpg',
    href: 'https://ascooo.com/mcdonalds',
    tag: '模擬',
  },
  ...Array.from({ length: 7 }, (_, i) => ({
    id: i + 2,
    title: `遊戲作品 ${i + 2}`,
    img: `https://picsum.photos/seed/game${i}/400/560`,
    href: '#',
    tag: '遊戲',
  })),
]

export default function GamesPage() {
  return (
    <Layout>
      <div className="page-banner">
        <img
          className="page-banner-bg"
          src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop"
          alt="遊戲"
        />
        <div className="page-banner-content">
          <span className="page-banner-en">Games</span>
          <h1 className="page-banner-title">遊戲</h1>
        </div>
      </div>

      <div className="page-body wide">
        <div className="section-heading fade-in-up">
          <span className="en">ALL GAMES</span>
          <span className="ja">所有遊戲</span>
        </div>

        <div className="card-grid">
          {ITEMS.map((item, i) => (
            <a
              key={item.id}
              href={item.href}
              className="grid-card fade-in-up"
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
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
