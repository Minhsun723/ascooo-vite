// src/pages/EventsPage.jsx
import Layout from '../components/Layout'
import '../styles/pages.css'

const EVENTS = [
  {
    id: 1,
    date: '2025.08.15 – 08.17',
    title: '活動名稱一',
    desc: '活動簡介文字，可以填入活動的相關說明與詳情。',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 2,
    date: '2025.09.20',
    title: '活動名稱二',
    desc: '活動簡介文字，可以填入活動的相關說明與詳情。',
    img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 3,
    date: '2025.10.11',
    title: '活動名稱三',
    desc: '活動簡介文字，可以填入活動的相關說明與詳情。',
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 4,
    date: '2025.12.01',
    title: '活動名稱四',
    desc: '活動簡介文字，可以填入活動的相關說明與詳情。',
    img: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=800&auto=format&fit=crop',
    href: '#',
  },
]

export default function EventsPage() {
  return (
    <Layout>
      <div className="page-banner">
        <img
          className="page-banner-bg"
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
          alt="活動"
        />
        <div className="page-banner-content">
          <span className="page-banner-en">Events</span>
          <h1 className="page-banner-title">活動</h1>
        </div>
      </div>

      <div className="page-body">
        <div className="section-heading fade-in-up">
          <span className="en">UPCOMING &amp; PAST</span>
          <span className="ja">近期活動</span>
        </div>

        <div className="event-list">
          {EVENTS.map((ev, i) => (
            <a
              key={ev.id}
              href={ev.href}
              className="event-card fade-in-up"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <img className="event-card-img" src={ev.img} alt={ev.title} />
              <div className="event-card-body">
                <span className="event-card-date">{ev.date}</span>
                <p className="event-card-title">{ev.title}</p>
                <p className="event-card-desc">{ev.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  )
}
