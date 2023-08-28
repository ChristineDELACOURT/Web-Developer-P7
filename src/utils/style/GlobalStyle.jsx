import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family:Montserrat, Helvetica, sans-serif;
      font-style:normal;
      color:${colors.primary};
      font-weight:500;
      margin:0;
      padding:0;
    }
    body {
      max-width:1240px;
      min-width:320px;
      margin:0% 5%;
      background-color: ${colors.ternary};
      min-height: 100vh;
    }

  }
`

function GlobalStyle() {
  return <StyledGlobalStyle/>
}

export default GlobalStyle
