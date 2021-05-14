import api from './api'

export default async function getTag(locale, name) {
  const {
    data: { data }
  } = await api.get(
    `/items/tags?fields=*,descriptions.*,posts.post.*,posts.post.tags.tag.*,posts.post.translations.*&deep[descriptions][_filter][language_code][_eq]=${locale}&deep[posts][post][translations][_filter][language_code][_eq]=${locale}&filter[name]=${name}`
  )

  const rawTag = data[0]
  const { description } = rawTag.descriptions[0]

  const posts = rawTag.posts.map(rawPost => {
    const { description, title } = rawPost.post.translations[0]

    delete rawPost.post.title
    delete rawPost.post.translations

    const post = { description, title, ...rawPost.post }

    return post
  })

  delete rawTag.descriptions
  delete rawTag.posts

  posts.sort(function (a, b) {
    if (a.date < b.date) {
      return 1
    }
    if (a.date > b.date) {
      return -1
    }
    return 0
  })

  const tag = { description, ...rawTag, posts: [...posts] }

  return tag
}
