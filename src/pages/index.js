import { useRouter } from 'next/router'

import SEO from '@/components/seo'
import Header from '@/components/header'
import Profile from '@/components/profile'
import Links from '@/components/links'
import Footer from '@/components/footer'

export default function Home({ data }) {
  const router = useRouter()
  const { locale } = router
  const profile = data.profile[locale]
  const footer = data.footer[locale]

  return (
    <div className="mx-auto px-6 max-w-screen-md">
      <SEO data={data} />
      <Header data={data} />
      <main>
        <Profile
          image={data.image}
          alt={data.name}
          text={profile?.text}
          title={profile?.title}
        />
        <Links data={data.links} />
      </main>
      <Footer footerText={footer} name={data.name} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.URL}/api`)
  const data = await res.json()

  return { props: { data } }
}
