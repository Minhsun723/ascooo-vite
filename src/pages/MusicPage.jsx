// src/pages/MusicPage.jsx
import Layout from '../components/Layout'
import '../styles/pages.css'

const ITEMS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `音樂作品 ${i + 1}`,
  img: `https://picsum.photos/seed/music${i}/400/400`,
  href: '#',
}))

export default function MusicPage() {
  return (
    <Layout>
      <div className="page-banner">
        <img
          className="page-banner-bg"
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop"
          alt="音樂"
        />
        <div className="page-banner-content">
          <span className="page-banner-en">Music</span>
          <h1 className="page-banner-title">音樂</h1>
        </div>
      </div>

      <div className="page-body wide">
        <div className="section-heading fade-in-up">
          <span className="en">ALL MUSIC</span>
          <span className="ja">所有音樂</span>
        </div>

        <div className="card-grid">
          {ITEMS.map((item, i) => (
            <a
              key={item.id}
              href={item.href}
              className="grid-card fade-in-up"
              style={{ animationDelay: `${0.05 * i}s` }}
            >
              <div className="card-image-wrapper" style={{ aspectRatio: '1/1' }}>
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
