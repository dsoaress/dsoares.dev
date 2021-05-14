import { serialize } from 'next-mdx-remote/serialize'
import reading from 'reading-time'

import api from '@/lib/api'

export default async function getPost(locale, slug) {
  const {
    data: { data }
  } = await api.get(
    `/items/posts?fields=*,tags.tag.*,translations.*&deep[translations][_filter][language_code][_eq]=${locale}&filter[slug]=${slug}`
  )

  const rawPost = data[0]
  const { body: rawBody, description, title } = rawPost.translations[0]

  const body = await serialize(rawBody, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-unwrap-images'),
        require('remark-prism'),
        require('remark-footnotes')
      ]
    }
  })

  const readingTime = Math.round(reading(rawBody).minutes)

  delete rawPost.title
  delete rawPost.translations

  const tags_list = rawPost.tags.map(t => t.tag.name).join(', ')

  const post = { description, title, body, tags_list, readingTime, ...rawPost }

  return post
}
