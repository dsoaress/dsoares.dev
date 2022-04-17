import type { CSS, VariantProps } from '@stitches/react'
import type { HTMLAttributes } from 'react'

import { styled } from '@/styles/stitches'

type SectionProps = {
  as?: 'section' | 'div'
  css?: CSS
} & VariantProps<typeof StyledSection> &
  HTMLAttributes<HTMLDivElement>

const StyledSection = styled('section', {
  my: 80
})

export function Section(props: SectionProps) {
  return <section {...props} />
}
