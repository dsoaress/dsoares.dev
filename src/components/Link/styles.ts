import { Link as ReactScroll } from 'react-scroll'
import tw, { css, styled } from 'twin.macro'

import { Link } from '.'

export const BaseStyle = css`
  ${tw`z-10 font-medium no-underline transition-colors duration-300 cursor-pointer hover:text-primary-500 active:text-primary-600`}
`

export const StyledLink = styled.a<{ active?: boolean }>`
  ${BaseStyle}
  ${({ active = false }) => active && tw`text-primary-500`}
`

export const ScrollLink = styled(ReactScroll)`
  ${BaseStyle}
`

export const CardLink = styled(Link)`
  ${tw`absolute inset-0 `}
`
