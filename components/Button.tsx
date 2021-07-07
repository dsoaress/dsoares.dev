import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  transition-property: background;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 0.35rem;
  background: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.primary[100]};
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary[600]};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary[700]};
    color: ${({ theme }) => theme.colors.primary[200]};
  }
`

export default function Button({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <StyledButton {...props} />
}
