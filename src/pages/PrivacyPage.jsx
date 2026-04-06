// src/pages/PrivacyPage.jsx
import Layout from '../components/Layout'
import '../styles/pages.css'

const SECTIONS = [
  {
    title: '一、資料蒐集範圍',
    content: [
      '當您使用本網站時，我們可能蒐集以下資訊：',
      '您主動提供的資料，例如透過聯絡表單填寫的姓名、電子郵件地址及訊息內容。',
      '瀏覽行為資料，包含 IP 位址、瀏覽器類型、瀏覽頁面及停留時間等，用於改善網站效能及使用者體驗。',
    ],
  },
  {
    title: '二、資料使用目的',
    content: [
      '我們蒐集的個人資料僅用於以下目的：',
    ],
    list: [
      '回覆您的詢問或提供客戶服務',
      '改善本網站的功能及使用體驗',
      '寄送您同意接收的電子報或活動通知',
      '依法律規定進行必要之揭露',
    ],
  },
  {
    title: '三、資料保護措施',
    content: [
      '我們採取合理的技術與管理措施，保護您的個人資料免於未經授權的存取、使用或洩漏。',
      '本網站使用 HTTPS 加密傳輸，確保資料在傳輸過程中的安全性。',
    ],
  },
  {
    title: '四、Cookie 政策',
    content: [
      '本網站使用 Cookie 及類似技術以提升瀏覽體驗。您可以透過瀏覽器設定拒絕 Cookie，但這可能影響部分功能的正常使用。',
    ],
  },
  {
    title: '五、第三方連結',
    content: [
      '本網站可能包含連結至第三方網站。我們對第三方網站的隱私權政策及內容概不負責，建議您在造訪前自行閱讀其隱私權政策。',
    ],
  },
  {
    title: '六、您的權利',
    content: [
      '您有權要求查詢、更正、刪除或停止使用您的個人資料。如需行使上述權利，請透過聯絡頁面與我們聯繫。',
    ],
  },
  {
    title: '七、政策更新',
    content: [
      '本隱私權政策得不定時修訂，更新後的內容將公告於本頁面。建議您定期瀏覽本頁面以瞭解最新政策。',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <Layout>
      <div style={{ paddingTop: '80px', background: '#f4f4f4', minHeight: '100vh' }}>
        <div className="legal-page">
          <div className="legal-header fade-in-up">
            <h1>隱私權政策</h1>
            <p className="updated">最後更新：2026 年 1 月 1 日</p>
          </div>

          <p className="fade-in-up" style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.9, marginBottom: 40 }}>
            本隱私權政策說明 ascooo（以下簡稱「我們」）如何蒐集、使用及保護您在使用本網站時所提供的個人資料。使用本網站即表示您同意本政策的條款。
          </p>

          {SECTIONS.map((sec, i) => (
            <div key={i} className="legal-section fade-in-up" style={{ animationDelay: `${0.07 * i}s` }}>
              <h2>{sec.title}</h2>
              {sec.content.map((p, j) => <p key={j}>{p}</p>)}
              {sec.list && (
                <ul>
                  {sec.list.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
