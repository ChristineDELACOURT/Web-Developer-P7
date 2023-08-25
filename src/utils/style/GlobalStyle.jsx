import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: Montserrat, Helvetica, sans-serif;
      font-style: "Monserrat";
      color:${colors.primary};
      weight:500;
      margin:0;
      padding:0;
    }

    body {
        margin: 0 5% 0 5%;
        background-color: ${colors.ternary};
    }
  }
`

function GlobalStyle() {

  return <StyledGlobalStyle isDarkMode='false' />
}

export default GlobalStyle
