import type { CSS, VariantProps } from '@stitches/react'
import type { HTMLAttributes } from 'react'

import { sharedTypographyProps, sharedTypographyVariants } from '@/styles/shared'
import { styled } from '@/styles/stitches'

type TextProps = {
  as?: 'p' | 'span'
  css?: CSS
} & HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof StyledText>

const StyledText = styled('p', sharedTypographyProps, sharedTypographyVariants, {
  defaultVariants: {
    size: 'md'
  }
})

export function Text(props: TextProps) {
  return <StyledText {...props} />
}
