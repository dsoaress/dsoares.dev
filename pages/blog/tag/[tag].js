import { useRouter } from 'next/router'

import Heading from '@/components/Heading'
import Layout from '@/components/Layout'
import PostsList from '@/components/PostsList'
import Tag from '@/components/Tag'
import getTag from '@/lib/getTag'
import getTagsPaths from '@/lib/getTagsPaths'
import settings from '@/settings'

export default function TagPage({ tag }) {
  const { locale } = useRouter()
  const { tag_preposition } = settings[locale]

  const { color, name, posts } = tag
  const count = posts?.length

  return (
    <Layout>
      <Heading
        as="h1"
        className="text-primary-700 dark:text-primary-500 flex items-center"
      >
        {posts.length} Post{count > 1 ? 's' : ''} {tag_preposition}
        <Tag color={color} name={name} size="bigger" />
      </Heading>
      <PostsList posts={posts} />
    </Layout>
  )
}

export async function getStaticPaths({ locales }) {
  const paths = await getTagsPaths(locales)
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ locale, params }) {
  const tag = await getTag(locale, params.tag)
  return { props: { tag }, revalidate: 1 }
}
