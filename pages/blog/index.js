import Layout from '@/components/Layout'
import Heading from '@/components/Heading'
import PostsList from '@/components/PostsList'
import getPostsByMonth from '@/lib/getPostsByMonth'
import { formatDate } from '@/lib/formatDate'

export default function BlogPage({ postsByMonth }) {
  function capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  return (
    <Layout>
      {postsByMonth.map(({ date, posts }, i) => (
        <div key={i} className="mb-24 last:mb-0">
          <Heading
            as="h1"
            className="text-primary-700 dark:text-primary-500 !text-xl"
          >
            {capitalize(formatDate(date))}
          </Heading>

          <PostsList posts={posts} />
        </div>
      ))}
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  const postsByMonth = await getPostsByMonth(locale)
  return { props: { postsByMonth }, revalidate: 1 }
}
