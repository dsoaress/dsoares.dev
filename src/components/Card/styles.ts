import { lighten } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    transition: all 0.3s;
    border: 1px solid ${lighten(0.05, theme.colors.background)};
    border-radius: ${theme.rounded};

    &:hover {
      background: ${lighten(0.04, theme.colors.background)};
      box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.05);
      transform: translate(0, -0.25rem);
    }
  `}
`

export const ImageCover = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 260px;
    border-radius: ${theme.rounded} ${theme.rounded} 0 0;
    overflow: hidden;
  `}
`

export const Container = styled.main`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacing.md};

    padding: ${theme.spacing.xl};
  `}
`
