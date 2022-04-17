import type { ButtonHTMLAttributes } from 'react'
import type { IconType } from 'react-icons/lib'

import { styled } from '@/styles/stitches'

type ButtonProps = {
  icon?: IconType
} & ButtonHTMLAttributes<HTMLButtonElement>

const StyledButton = styled('button', {
  unset: 'all',
  display: 'flex',
  height: 44,
  cursor: 'pointer',
  alignItems: 'center',
  borderRadius: '$md',
  border: 'none',
  backgroundColor: '$accent10',
  px: 24,
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '$none',
  color: '$neutral1',
  transition: 'background-color 0.3s ease-in-out',

  '&:hover': {
    backgroundColor: '$accent11'
  },

  svg: {
    mr: 8,
    fontSize: 18
  }
})

export function Button({ children, icon: Icon, ...props }: ButtonProps) {
  return (
    <StyledButton {...props}>
      {!!Icon && <Icon />}
      {children}
    </StyledButton>
  )
}
