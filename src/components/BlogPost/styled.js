import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const BlogPostImage = styled(BackgroundImage)``

export const BlogPostTitle = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 250px 0;

  h1 {
    color: white;
    text-align: center;
  }
`

export const BlogPostWrapper = styled.div`
  max-width: 1200px;
  padding: 0 20px;
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
    margin-left: 150px;
    margin-right: 150px;

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
