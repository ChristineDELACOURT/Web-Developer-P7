import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../hooks'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: Montserrat, Helvetica, sans-serif;
    }

    body {
        margin: 0 5% 0 5%;
        background-color: ${(props) =>
          props.isDarkMode ? '#2F2E41' : 'white'};
    }
`

function GlobalStyle() {
  const { theme } = useTheme()

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
