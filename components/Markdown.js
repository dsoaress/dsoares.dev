import { MDXRemote } from 'next-mdx-remote'

import Figure from '@/components/Figure'

export default function Markdown({ className, content }) {
  const components = {
    img: Figure
  }

  return (
    <div className={className}>
      <MDXRemote components={components} {...content} />
    </div>
  )
}
