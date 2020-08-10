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
    margin-bottom: 1rem;

    &:last-child {
      margin: 0;
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
    margin-bottom: 1.8rem;
  }

  h2 {
    font-size: 3rem;
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
`
export default GlobalStyles
