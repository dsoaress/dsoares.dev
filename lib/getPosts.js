import api from '@/lib/api'

export default async function getPosts(locale, limit) {
  const {
    data: { data }
  } = await api.get(
    `/items/posts?sort=-date&fields=*,tags.tag.*,translations.*&deep[translations][_filter][language_code][_eq]=${locale}&limit=${
      limit || 1000
    }`
  )

  const posts = data.map(rawPost => {
    const { description, title } = rawPost.translations[0]

    delete rawPost.title
    delete rawPost.translations

    const post = { description, title, ...rawPost }

    return post
  })

  return posts
}
