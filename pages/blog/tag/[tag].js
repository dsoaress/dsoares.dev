import { useRouter } from 'next/router'
import useSWR from 'swr'

import Layout from '@/components/Layout'
import PostCard from '@/components/PostCard'
import { api } from '@/lib/api'
import { fetcher } from '@/lib/fetcher'
import { tagQuery, tagsNameQuery } from '@/lib/queries'

export default function TagPage(props) {
  const { locale, query } = useRouter()

  const { data: tag } = useSWR(tagQuery(locale, query.tag), fetcher, {
    initialData: props.tag
  })

  const { name, posts } = tag.data[0]
  const count = posts.length

  const locales = {
    en: 'in',
    pt: 'em'
  }
  const t = locales[locale]

  return (
    <Layout>
      <h1 className="text-3xl">
        {posts.length} Post{count > 1 ? 's' : ''} {t} {name}
      </h1>

      <div>
        {posts
          ?.sort(function (a, b) {
            return b.post.date < a.post.date
              ? -1
              : b.post.date > a.post.date
              ? 1
              : 0
          })
          .map(({ post }) => {
            const { id, date, icon, slug, tags, translations } = post
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
    </Layout>
  )
}

export async function getStaticPaths({ locales }) {
  const { data: tags } = await api.get(tagsNameQuery())

  const paths = locales.reduce(
    (acc, locale) => [
      ...acc,
      ...tags.data.map(tag => ({
        params: { tag: tag.name },
        locale
      }))
    ],
    []
  )

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ locale, params }) {
  const { data: tag } = await api.get(tagQuery(locale, params.tag))

  return { props: { tag }, revalidate: 1 }
}
