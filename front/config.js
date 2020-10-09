async function fetchData(graphql) {
  const result = await graphql(`
    query {
      sanitySiteSettings {
        title
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.sanitySiteSettings || {}).edges || []
}

exports.config = async ({ graphql }) => {
  await fetchData(graphql)
}
