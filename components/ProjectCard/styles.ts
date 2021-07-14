import { lighten } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: grid;
    gap: ${theme.spacing.md};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid ${lighten(0.05, theme.colors.background)};
    border-radius: 0.35rem;
    padding: ${theme.spacing.xl};

    &:hover {
      background: ${lighten(0.04, theme.colors.background)};
      box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.05);
    }
  `}
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;

  span {
    p {
      display: flex;
      align-items: center;
    }

    svg {
      margin-right: ${({ theme }) => theme.spacing.xs};
    }
  }
`
