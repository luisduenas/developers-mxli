import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @import url(//fonts.googleapis.com/css?family=Syne);

  html {
    font-family: 'Syne', Arial, Helvetica, sans-serif;
  }

  body {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
`

export default GlobalStyles
