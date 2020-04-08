import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: var(--default);
    background: var(--background);
    transition: color 1s;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;

    &.dark {
      --highLight: #E61F5B;
      --default: #dadada;
      --background: #111213;
      --backgroundMedium: #1A1D23;
    }

    &.light {
      --highLight: #E61F5B;
      --default: #222;
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

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 1rem;
  }

  p {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`
export default GlobalStyles
