async function createPostsPage(graphql, actions, reporter) {
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
    const path = `${slug.current}/`

    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { id }
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createPostsPage(graphql, actions, reporter)
}
