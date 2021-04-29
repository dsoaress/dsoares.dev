import { useRouter } from 'next/router'

import SEO from '@/components/seo'
import Header from '@/components/header'
import Profile from '@/components/profile'
import Links from '@/components/links'
import Footer from '@/components/footer'

export default function Home({ data }) {
  const { locale } = useRouter()
  const profile = data.profile[locale]
  const footer = data.footer[locale]
  const { image, links, name } = data
  const splittedName = name.split(' ')
  const firstName = splittedName[0]
  const lastName = splittedName[1]
  const description = profile?.title + ' ' + profile?.text

  return (
    <div className="mx-auto px-6 max-w-screen-md">
      <SEO description={description} name={name} />
      <Header firstName={firstName} lastName={lastName} />
      <main>
        <Profile
          image={image}
          alt={name}
          text={profile?.text}
          title={profile?.title}
        />
        <Links data={links} />
      </main>
      <Footer footer={footer} name={name} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/api`)
  const data = await res.json()

  return { props: { data } }
}
