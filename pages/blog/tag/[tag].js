import { useRouter } from 'next/router'

import Heading from '@/components/Heading'
import PostsList from '@/components/PostsList'
import Tag from '@/components/Tag'
import getTag from '@/lib/getTag'
import getTagsPaths from '@/lib/getTagsPaths'
import translations from '@/translations'

export default function TagPage({ tag }) {
  const { locale } = useRouter()
  const { blog_preposition } = translations[locale]

  return (
    <>
      <Heading as="h1" className="flex items-center" highlight>
        {tag.posts.length} Post{tag.posts?.length > 1 ? 's' : ''}{' '}
        {blog_preposition}
        <Tag color={tag.color} name={tag.name} size="bigger" />
      </Heading>
      <p className="prose prose-lg">{tag.description}</p>
      <PostsList posts={tag.posts} />
    </>
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
