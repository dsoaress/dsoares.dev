import styled from 'styled-components'
import media from 'styled-media-query'

export const SocialWrapper = styled.div`
  margin-top: 1.8rem;
`
export const SocialList = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;

  ${media.lessThan('small')`
    justify-content: space-around;
  `}
`

export const SocialItem = styled.li`
  margin: 0 20px;

  &:nth-child(1) {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

export const SocialLink = styled.a`
  color: var(--default);

  &:hover {
    color: var(--highLight);
  }
`

export const IconWrapper = styled.div`
  width: 30px;
`
