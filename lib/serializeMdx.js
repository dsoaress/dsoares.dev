import { serialize } from 'next-mdx-remote/serialize'

export default async function serializeMdx(content) {
  const serializedMdx = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-unwrap-images'),
        require('remark-prism'),
        require('remark-footnotes')
      ]
    }
  })

  return serializedMdx
}
