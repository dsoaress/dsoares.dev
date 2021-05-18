import { serialize } from 'next-mdx-remote/serialize'
import unwrapImages from 'remark-unwrap-images'
import prism from 'remark-prism'

export default async function serializeMdx(content) {
  const serializedMdx = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [unwrapImages, prism]
    }
  })

  return serializedMdx
}
