import { useRouter } from 'next/router'
import useSWR from 'swr'

import Layout from '@/components/Layout'
import { api } from '@/lib/api'
import { fetcher } from '@/lib/fetcher'
import { postQuery, postsSlugsQuery } from '@/lib/queries'

export default function BlogPostPage(props) {
  const { locale, query } = useRouter()

  const { data: post } = useSWR(postQuery(locale, query.post), fetcher, {
    initialData: props.post
  })

  // console.log(post.data[0])

  return (
    <Layout>
      <h1>Post</h1>
    </Layout>
  )
}

export async function getStaticPaths({ locales }) {
  const { data: post } = await api.get(postsSlugsQuery())

  const paths = locales.reduce(
    (acc, locale) => [
      ...acc,
      ...post.data.map(post => ({
        params: { post: post.slug },
        locale
      }))
    ],
    []
  )

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ locale, params }) {
  const { data: post } = await api.get(postQuery(locale, params.post))

  return { props: { post }, revalidate: 1 }
}
