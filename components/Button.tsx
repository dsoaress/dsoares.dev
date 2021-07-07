import { darken, lighten } from 'polished'
import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 0.35rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => lighten(1, theme.colors.text)};
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => darken(0.1, theme.colors.primary)};
  }

  &:active {
    background: ${({ theme }) => darken(0.2, theme.colors.primary)};
  }
`

export default function Button({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <StyledButton {...props} />
}
