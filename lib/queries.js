export function postsQuery(locale, limit) {
  return `/items/posts?sort=-date&fields=*,tags.tag.*,translations.*&deep[translations][_filter][language_code][_eq]=${locale}&limit=${
    limit || 1000
  }`
}

export function postQuery(locale, slug) {
  return `/items/posts?fields=*,tags.tag.*,translations.*&deep[translations][_filter][language_code][_eq]=${locale}&filter[slug]=${slug}`
}

export function postsSlugsQuery() {
  return '/items/posts?fields=slug'
}

export function tagQuery(locale, tag) {
  return `/items/tags?fields=*,descriptions.*,posts.post.*,posts.post.tags.tag.*,posts.post.translations.*&deep[descriptions][_filter][language_code][_eq]=${locale}&deep[posts][post][translations][_filter][language_code][_eq]=${locale}&filter[name]=${tag}`
}

export function tagsNameQuery() {
  return '/items/tags?fields=name'
}
