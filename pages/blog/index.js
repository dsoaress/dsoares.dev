import { useRouter } from 'next/router'
import useSWR from 'swr'

import Layout from '@/components/Layout'
import Heading from '@/components/Heading'
import PostCard from '@/components/PostCard'
import { api } from '@/lib/api'
import { fetcher } from '@/lib/fetcher'
import { formatDate } from '@/lib/formatDate'
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
      {postsByMonth.map(({ date, posts }, i) => (
        <div key={i}>
          <Heading size="h3" className="mt-12">
            {formatDate(date)}
          </Heading>
          <hr className="border-neutral-300 dark:border-neutral-700" />
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
