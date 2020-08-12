import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const BlogPostWrapper = styled.article``

export const BlogPostImage = styled(BackgroundImage)``

export const BlogPostTitle = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 250px 0;

  h1 {
    color: white;
    text-align: center;
    margin: 0;
  }
`

export const BlogPostText = styled.div`
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

    ol {
      margin: 0;

      li {
        font-size: 0.75rem;
        margin-bottom: 0.5rem;

        p {
          display: contents;
        }
      }
    }
  }

  figcaption {
    font-size: 0.75rem;
    text-align: center;
  }
`