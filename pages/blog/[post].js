import Heading from '@/components/Heading'
import Layout from '@/components/Layout'
import Markdown from '@/components/Markdown'
import PostAside from '@/components/PostAside'
import getPostsPaths from '@/lib/getPostsPaths'
import getPost from '@/lib/getPost'

export default function BlogPostPage({ post }) {
  return (
    <Layout>
      <article className="relative flex flex-col md:grid md:grid-cols-4 xl:col-gap-6">
        <div className="md:col-span-3">
          <Heading as="h1">{post.title}</Heading>
        </div>
        <div className="order-1 space-y-16 md:mr-8 md:order-none md:col-span-3">
          <div className="prose md:prose-xl dark:prose-dark">
            <Markdown content={post.body} />
          </div>
        </div>
        <div>
          <PostAside
            date={post.date}
            icon={post.icon}
            tags={post.tags}
            readingTime={post.readingTime}
          />
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths({ locales }) {
  const paths = await getPostsPaths(locales)
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ locale, params }) {
  const post = await getPost(locale, params.post)
  return { props: { post }, revalidate: 1 }
}
