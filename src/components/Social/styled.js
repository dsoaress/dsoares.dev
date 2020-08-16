import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  list-style: none;

  ${media.lessThan('small')`
    justify-content: space-around;
  `}
`

export const Item = styled.li`
  margin: 0;
`

export const Link = styled.a`
  color: var(--default);

  &:hover {
    color: var(--highLight);
  }
`

export const IconWrapper = styled.div`
  width: 30px;
  margin: 1.8rem 1.8rem 0 0;

  ${media.lessThan('small')`
    margin: 1.8rem 0.5rem 0 0;
  `}
`
