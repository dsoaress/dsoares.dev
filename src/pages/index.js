import { useRouter } from 'next/router'

import SEO from '@/components/seo'
import Header from '@/components/header'
import Profile from '@/components/profile'
import Links from '@/components/links'
import Footer from '@/components/footer'
import content from '@/content'

export default function Home() {
  const router = useRouter()
  const { locale } = router
  const t = content[locale]
  return (
    <div className="mx-auto px-6 max-w-screen-md">
      <SEO />
      <Header />
      <main>
        <Profile
          image={content.image}
          alt={content.title}
          text={t.profile.text}
          title={t.profile.title}
        />
        <Links data={content.links} />
      </main>
      <Footer />
    </div>
  )
}
