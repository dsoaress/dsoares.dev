import type { HTMLAttributes } from 'react'

import { styled } from '@/styles/stitches'

const StyledContainer = styled('main', {
  mx: 'auto',
  px: 24,
  maxWidth: 1280
})

export function Container(props: HTMLAttributes<HTMLDivElement>) {
  return <StyledContainer {...props} />
}
