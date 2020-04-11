import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: var(--default);
    background: var(--background);
    transition: color 1s;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;

    &.dark {
      --highLight: #E61F5B;
      --default: #dadada;
      --medium: #888;
      --background: #111213;
      --backgroundMedium: #1A1D23;
    }

    &.light {
      --highLight: #E61F5B;
      --default: #222;
      --medium: #888;
      --background: #fff;
      --backgroundMedium: #EBEBEB;
    }

    &::-webkit-scrollbar {
      display: none;
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
`
export default GlobalStyles
