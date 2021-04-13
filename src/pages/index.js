import { useRouter } from 'next/router'
import Layout from '@/layout'
import Profile from '@/containers/profile'
import Links from '@/containers/links'
import content from '@/content'

export default function Home() {
  const router = useRouter()
  const { locale } = router
  const t = content[locale]
  return (
    <Layout>
      <Profile
        image={content.image}
        alt={content.title}
        text={t.profile.text}
        title={t.profile.title}
      />
      <Links data={content.links} />
    </Layout>
  )
}
