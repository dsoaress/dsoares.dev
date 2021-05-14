import api from './api'

export default async function getTagsPaths(locales) {
  const {
    data: { data: tags }
  } = await api.get('/items/tags?fields=name')

  const paths = locales.reduce(
    (acc, locale) => [
      ...acc,
      ...tags.map(tag => ({
        params: { tag: tag.name },
        locale
      }))
    ],
    []
  )

  return paths
}
