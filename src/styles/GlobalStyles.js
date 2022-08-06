import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-family: helvetica, arial, sans-serif;
  }

  body {
    background-color: blue;
    width: 90%;
    max-width: 1200px;
    margin: 2em auto;
  }
`

export default GlobalStyles
