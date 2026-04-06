// src/pages/ContactPage.jsx
import { useState } from 'react'
import Layout from '../components/Layout'
import '../styles/pages.css'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 這裡之後可以串接後端 API 或 EmailJS
    console.log('送出:', form)
    setSubmitted(true)
  }

  return (
    <Layout>
      <div className="page-banner">
        <img
          className="page-banner-bg"
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop"
          alt="聯絡資訊"
        />
        <div className="page-banner-content">
          <span className="page-banner-en">Contact</span>
          <h1 className="page-banner-title">聯絡資訊</h1>
        </div>
      </div>

      <div className="page-body">
        <div className="contact-layout">
          {/* 左側：聯絡資訊 */}
          <div className="contact-info fade-in-up">
            <h2>歡迎與我們聯繫</h2>
            <p>
              無論是業務合作、作品詢問，或是任何想法與建議，都歡迎透過以下方式與我們聯絡。我們會盡快回覆您的訊息。
            </p>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <i className="fas fa-envelope" />
                <span>contact@ascooo.com</span>
              </div>
              <div className="contact-info-item">
                <i className="fab fa-youtube" />
                <span>YouTube / TikTok / Instagram<br />@ascooo</span>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-clock" />
                <span>回覆時間：週一至週五<br />09:00 – 18:00 (UTC+8)</span>
              </div>
            </div>
          </div>

          {/* 右側：表單 */}
          <div className="contact-form fade-in-up" style={{ animationDelay: '0.1s' }}>
            {submitted ? (
              <div className="submit-success">
                <i className="fas fa-circle-check" />
                <h3>訊息已送出！</h3>
                <p>感謝您的來信，我們將盡快與您聯繫。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">姓名 *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="您的姓名"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">電子郵件 *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">主旨</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="訊息主旨"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">訊息內容 *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="請輸入您的訊息…"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">送出訊息</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
