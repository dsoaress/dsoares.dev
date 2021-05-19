import Link from 'next/link'
import { useRouter } from 'next/router'

import Button from '@/components/Button'
import Heading from '@/components/Heading'
import PostsList from '@/components/PostsList'
import ProfileCard from '@/components/ProfileCard'
import getProfile from '@/lib/getProfile'
import getPosts from '@/lib/getPosts'
import translations from '@/translations'

export default function IndexPage({ posts, profile }) {
  const { locale } = useRouter()
  const t = translations[locale]

  return (
    <>
      <ProfileCard
        image={profile.image}
        body={profile.body}
        title={profile.title}
      />
      {/* <div>
        <Heading size="h3" className="text-center" noMargin highlight>
          {t.blogTitle}
        </Heading>
        <Heading as="h2" className="text-center">
          {t.blogSubtitle}
        </Heading>
        <div className="mb-12 prose prose-lg text-center dark:prose-dark max-w-none">
          {t.blogDescription}
        </div>
        <PostsList posts={posts} />
      </div>

      <div className="flex justify-center">
        <Link href="/blog">
          <a>
            <Button>{t.blogButton}</Button>
          </a>
        </Link>
      </div> */}
    </>
  )
}

export async function getStaticProps({ locale }) {
  const profile = await getProfile(locale)
  const posts = await getPosts(locale, 3)

  return { props: { posts, profile }, revalidate: 1 }
}
