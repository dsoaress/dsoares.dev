import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --highLight: #bc2d57;
    --default: #222;
    --sun: #222;
    --medium: #888;
    --background: #fff;
    --backgroundMedium: #ebebeb;
  }

  body {
    font-family: 'Rubik', 'sans-serif';
    font-size: 16px;
    line-height: 1.8;
    text-rendering: optimizeLegibility;
    color: var(--default);
    background: var(--background);
    transition: color 1s;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  p {
    margin-bottom: 1.8rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    line-height: 1;
    margin: 3rem 0 1.8rem;
  }

  h1 {
    font-size: 3rem;
    margin-top: 0;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2.1rem;
  }

  h4 {
    font-size: 1.8rem;
  }

  h5 {
    font-size: 1.3rem;
  }

  h6 {
    font-size: 1.1rem;
  }

  ul,
  ol {
    list-style-position: inside;
    margin: 0 0 1.8rem;

    li {
      margin-bottom: calc(1.8rem / 2);

      p {
          display: contents;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

  }

  a {
    color: var(--highLight);
    text-decoration: none;
    border-bottom: 1px dashed var(--highLight);
    transition: color 0.5s;

    &:hover {
      color: var(--default);
    }
  }

  blockquote {
    margin: 0 0 1.8rem 8rem;
    padding: 0;
    font-size: 0.85rem;
    line-height: 1.4;
  }

  figcaption {
    font-size: 0.75rem;
    font-style: italic;
    text-align: center;
  }
`
export default GlobalStyles
