import { MDXRemote } from 'next-mdx-remote'
import cn from 'classnames'

import Figure from '@/components/Figure'

export default function Markdown({ className, content }) {
  const components = {
    img: Figure
  }

  return (
    <div className={cn('prose dark:prose-dark max-w-none', className)}>
      <MDXRemote components={components} {...content} />
    </div>
  )
}
