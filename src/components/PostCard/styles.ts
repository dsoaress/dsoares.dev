import { lighten } from 'polished'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid ${({ theme }) => lighten(0.05, theme.colors.background)};
  border-radius: 0.35rem;

  &:hover {
    background: ${({ theme }) => lighten(0.04, theme.colors.background)};
    box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.05);
  }
`

export const ImageCover = styled.div`
  position: relative;
  height: 260px;
  border-radius: 0.35rem 0.35rem 0 0;
  overflow: hidden;
`

export const Content = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xl};
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
      margin-left: ${({ theme }) => theme.spacing.xs};
    }
  }
`
