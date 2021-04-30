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

  const { description, footer, greeting, image, links, name } = data
  const splittedName = name.split(' ')
  const firstName = splittedName[0]
  const lastName = splittedName[1]

  return (
    <div className="mx-auto px-6 max-w-screen-md">
      <SEO description={description} name={name} />
      <Header firstName={firstName} lastName={lastName} />
      <main>
        <Profile
          alt={name}
          description={description}
          greeting={greeting}
          image={image}
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
