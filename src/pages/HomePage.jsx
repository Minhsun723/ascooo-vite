// src/pages/HomePage.jsx
import Layout from '../components/Layout'
import HeroSlideshow from '../components/HeroSlideshow'
import ShowcaseSection from '../components/ShowcaseSection'
import { useLanguage } from '../hooks/useLanguage'
import { showcaseSections } from '../i18n/translations'

export default function HomePage() {
  const { lang, t } = useLanguage()
  const sections = showcaseSections[lang] || showcaseSections['zh-TW']

  return (
    <Layout>
      <HeroSlideshow />
      <div className="showcase-wrapper">
        {sections.map((sec, i) => (
          <ShowcaseSection
            key={i}
            titleEn={sec.titleEn}
            titleLocal={sec.titleLocal}
            items={sec.items}
            viewAllLabel={t.showcase.viewAll}
            href={sec.href}
          />
        ))}
      </div>
    </Layout>
  )
}
