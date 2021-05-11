import { useRouter } from 'next/router'
import useSWR from 'swr'

import Layout from '@/components/Layout'
import PostCard from '@/components/PostCard'
import { api } from '@/lib/api'
import { fetcher } from '@/lib/fetcher'
import { postsQuery } from '@/lib/queries'
import { getPostsByMonth } from '@/lib/getPostsByMonth'

export default function BlogPage(props) {
  const { locale } = useRouter()

  const { data: posts } = useSWR(postsQuery(locale), fetcher, {
    initialData: props.posts
  })

  const postsByMonth = getPostsByMonth(posts.data)

  return (
    <Layout>
      <h1>Blog</h1>
      {postsByMonth.map(({ date, posts }, i) => (
        <div key={i}>
          {date}
          {posts.map(({ id, date, icon, slug, tags, translations }) => {
            const { description, title } = translations[0]

            return (
              <PostCard
                key={id}
                date={date}
                description={description}
                icon={icon}
                slug={slug}
                tags={tags}
                title={title}
              />
            )
          })}
        </div>
      ))}
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  const { data: posts } = await api.get(postsQuery(locale))

  return { props: { posts }, revalidate: 1 }
}
