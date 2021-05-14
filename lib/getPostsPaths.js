import api from '@/lib/api'

export default async function getPostsPaths(locales) {
  const {
    data: { data: posts }
  } = await api.get('/items/posts?fields=slug')

  const paths = locales.reduce(
    (acc, locale) => [
      ...acc,
      ...posts.map(post => ({
        params: { post: post.slug },
        locale
      }))
    ],
    []
  )

  return paths
}
