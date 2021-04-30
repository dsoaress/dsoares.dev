import useSWR from 'swr'

import SEO from '@/components/seo'
import Header from '@/components/header'
import Profile from '@/components/profile'
import Links from '@/components/links'
import Footer from '@/components/footer'
import { fetcher } from '@/lib/fetcher'

const { NEXT_PUBLIC_API_URL: api } = process.env

export default function Home(props) {
  const { data } = useSWR(api, fetcher, { initialData: props.data })

  const { footer, image, links, name, profile } = data
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
  const data = await fetcher(api)

  return { props: { data }, revalidate: 1 }
}
