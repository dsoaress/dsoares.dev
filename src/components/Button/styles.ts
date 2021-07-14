import { darken, lighten } from 'polished'
import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
    height: 2.5rem;
    border: none;
    border-radius: 0.35rem;
    background: ${theme.colors.primary};
    color: ${lighten(1, theme.colors.text)};
    font-size: ${theme.fontSizes.sm};
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background: ${darken(0.1, theme.colors.primary)};
    }

    &:active {
      background: ${darken(0.2, theme.colors.primary)};
    }

    svg {
      font-size: 20px;
      margin-right: ${theme.spacing.sm};
    }
  `}
`
