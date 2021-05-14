import Layout from '@/components/Layout'
import PostsList from '@/components/PostsList'
import ProfileCard from '@/components/ProfileCard'
import getPosts from '@/lib/getPosts'
import getProfile from '@/lib/getProfile'

export default function IndexPage({ posts, profile }) {
  return (
    <Layout>
      <ProfileCard
        image={profile.image}
        text={profile.text}
        title={profile.title}
      />
      <PostsList posts={posts} />
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  const posts = await getPosts(locale, 3)
  const profile = await getProfile(locale)

  return { props: { posts, profile }, revalidate: 1 }
}
