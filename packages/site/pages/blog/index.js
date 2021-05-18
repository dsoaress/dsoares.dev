import Heading from '@/components/Heading'
import PostsList from '@/components/PostsList'
import getPostsByMonth from '@/lib/getPostsByMonth'
import { formatDate } from '@/lib/formatDate'

export default function BlogPage({ postsByMonth }) {
  function capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  return postsByMonth.map(({ date, posts }, i) => (
    <div key={i} className="mb-24 last:mb-0">
      <Heading as="h1" className="!text-xl" highlight>
        {capitalize(formatDate(date))}
      </Heading>

      <PostsList posts={posts} />
    </div>
  ))
}

export async function getStaticProps({ locale }) {
  const postsByMonth = await getPostsByMonth(locale)
  return { props: { postsByMonth }, revalidate: 1 }
}
