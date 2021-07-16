import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  margin: 76px 0;
`

export const PostsList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xxl};

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  `}

  ${media.greaterThan('large')`
    grid-template-columns: 1fr 1fr 1fr;
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
      margin-left: ${({ theme }) => theme.spacing.xs};
    }
  }
`
