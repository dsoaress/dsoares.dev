import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const PostItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 40px;
  margin-bottom: 40px;

  ${media.lessThan('small')`
    grid-template-columns: 1fr;
    gap: 0;
  `}
`

export const PostItemImage = styled(Img)`
  border-radius: 3px;
`

export const PostItemText = styled.div`
  margin: 1.8rem 0;

  ${media.lessThan('small')`
    margin: 0.5rem 0;
  `}
`

export const PostItemTitle = styled.h2`
  font-size: 1.6rem;
  margin: 0.5rem 0;
`
