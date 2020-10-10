async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges.forEach(edge => {
    const { id, slug = {} } = edge.node
    const path = `/blog/${slug.current}/`

    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve(`./src/templates/blogPost.js`),
      context: { id }
    })
  })

  const postsPerPage = 5
  const numPages = Math.ceil(postEdges.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: require.resolve(`./src/templates/blogList.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter)
}
