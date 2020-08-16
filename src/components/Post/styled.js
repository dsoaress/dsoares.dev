import styled from 'styled-components'
import media from 'styled-media-query'
import BackgroundImage from 'gatsby-background-image'

export const PostWrapper = styled.article``

export const PostImage = styled(BackgroundImage)``

export const PostTitle = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 250px 30px;
  text-align: center;

  h1 {
    color: white;
    margin: 1rem 0;
  }

  ${media.lessThan('small')`
    padding: 150px 30px;
  `}
`

export const PostText = styled.div`
  max-width: 1200px;
  padding-top: 3rem;
  margin: auto;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  blockquote,
  .footnotes {
    margin-left: 165px;
    margin-right: 165px;

    ${media.lessThan('small')`
      margin-left: 0;
      margin-right: 0;
      padding: 0 30px;
    `}

    hr {
      width: 8rem;
      margin-bottom: 1rem;
    }

    ol {
      margin: 0;
      padding: 0;
      font-style: italic;

      li {
        font-size: 0.75rem;
      }
    }
  }

  blockquote {
    margin: 0 0 1.8rem 8rem;

    ${media.lessThan('small')`
      margin-left: 1rem;
    `}
  }
`
