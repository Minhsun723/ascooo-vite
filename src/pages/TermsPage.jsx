// src/pages/TermsPage.jsx
import Layout from '../components/Layout'
import '../styles/pages.css'

const SECTIONS = [
  {
    title: '一、服務說明',
    content: [
      '本網站由 ascooo 營運，提供動畫、遊戲及創意內容之展示與相關服務。使用本網站即表示您同意遵守本條款。',
    ],
  },
  {
    title: '二、使用規範',
    content: [
      '您使用本網站時，同意遵守以下規定：',
    ],
    list: [
      '不得從事任何違法或侵害他人權益的行為',
      '不得散布惡意程式、病毒或任何有害資料',
      '不得冒充他人或提供不實資訊',
      '不得以任何方式干擾本網站的正常運作',
      '不得未經授權存取本網站的系統或資料',
    ],
  },
  {
    title: '三、智慧財產權',
    content: [
      '本網站所有內容，包含但不限於文字、圖片、動畫、音樂及標誌，均受著作權法及相關智慧財產權法規保護，歸 ascooo 或其授權方所有。',
      '未經書面授權，禁止任何形式的重製、修改、散布或商業利用。如需引用或轉載，請事先取得我們的書面同意。',
    ],
  },
  {
    title: '四、免責聲明',
    content: [
      '本網站所提供之內容僅供參考，我們不保證內容的完整性、準確性或即時性。',
      '對於因使用本網站或依賴本網站內容所造成的任何損失，我們在法律允許的最大範圍內不承擔責任。',
    ],
  },
  {
    title: '五、外部連結',
    content: [
      '本網站可能包含連結至第三方網站。這些連結僅為方便使用者，我們不對第三方網站的內容或隱私權實踐負責。',
    ],
  },
  {
    title: '六、帳號責任',
    content: [
      '若本網站提供會員或帳號功能，您應負責維護帳號的保密性，並對使用您帳號進行的一切活動負全責。',
    ],
  },
  {
    title: '七、條款修訂',
    content: [
      '我們保留隨時修改本使用條款的權利。修改後的條款將於公告後生效。繼續使用本網站即表示您接受修改後的條款。',
    ],
  },
  {
    title: '八、準據法',
    content: [
      '本條款之解釋與適用，以中華民國法律為準據法。如因本條款發生任何爭議，雙方同意以台灣台北地方法院為第一審管轄法院。',
    ],
  },
]

export default function TermsPage() {
  return (
    <Layout>
      <div style={{ paddingTop: '80px', background: '#f4f4f4', minHeight: '100vh' }}>
        <div className="legal-page">
          <div className="legal-header fade-in-up">
            <h1>使用者條款</h1>
            <p className="updated">最後更新：2026 年 1 月 1 日</p>
          </div>

          <p className="fade-in-up" style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.9, marginBottom: 40 }}>
            請仔細閱讀以下使用條款。使用本網站即表示您已閱讀、理解並同意受本條款約束。若您不同意本條款，請勿使用本網站。
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
