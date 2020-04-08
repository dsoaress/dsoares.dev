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
    color: #dadada;
    background: #1a1d23;
  }

  a {
    color: #FF5184;
    text-decoration: none;
    border-bottom: 1px dashed #FF5184;
    transition: color 0.5s;

    &:hover {
      color: #dadada;
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
