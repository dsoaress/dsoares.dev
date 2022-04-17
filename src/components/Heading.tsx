import type { CSS, VariantProps } from '@stitches/react'
import type { HTMLAttributes } from 'react'

import { sharedTypographyProps, sharedTypographyVariants } from '@/styles/shared'
import { styled } from '@/styles/stitches'

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  css?: CSS
} & VariantProps<typeof StyledHeading> &
  HTMLAttributes<HTMLHeadingElement>

const StyledHeading = styled('h1', sharedTypographyProps, sharedTypographyVariants, {
  fontWeight: '$bold',

  defaultVariants: {
    size: '5xl'
  }
})

export function Heading(props: HeadingProps) {
  return <StyledHeading {...props} />
}
