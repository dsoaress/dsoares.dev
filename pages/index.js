import Layout from '@/components/Layout'
import PostsList from '@/components/PostsList'
import getPosts from '@/lib/getPosts'

export default function IndexPage({ posts }) {
  return (
    <Layout>
      <h1>Index</h1>
      <PostsList posts={posts} />
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  const posts = await getPosts(locale, 3)
  return { props: { posts }, revalidate: 1 }
}
