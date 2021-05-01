import useSWR from 'swr'

import Meta from '@/components/meta'
import Header from '@/components/header'
import Profile from '@/components/profile'
import Links from '@/components/links'
import Footer from '@/components/footer'
import { getInitialData } from '@/lib/getInitialData'
import { fetcher } from '@/lib/fetcher'

export default function Home(props) {
  const { data } = useSWR('/api', fetcher, { initialData: props.data })

  const { description, footer, greeting, image, links, name } = data
  const splittedName = name.split(' ')
  const firstName = splittedName[0]
  const lastName = splittedName[1]

  return (
    <>
      <Meta description={description} name={name} />
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
    </>
  )
}

export async function getStaticProps() {
  const data = await getInitialData()
  return { props: { data }, revalidate: 1 }
}
