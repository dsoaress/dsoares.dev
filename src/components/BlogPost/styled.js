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

    hr {
      width: 8rem;
      margin-bottom: 1rem;
    }

    ol {
      margin: 0;
      font-style: italic;

      li {
        font-size: 0.75rem;
      }
    }
  }

  blockquote {
    margin: 0 0 1.8rem 8rem;
  }
`
