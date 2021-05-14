import { MDXRemote } from 'next-mdx-remote'

import Figure from '@/components/Figure'

export default function Markdown({ content }) {
  const components = {
    img: Figure
  }

  return <MDXRemote components={components} {...content} />
}
