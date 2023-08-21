import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useTheme } from '../../utils/hooks'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  align-items: center;
`

const ErrorTitle = styled.h1`
  color: #ff6060;
  font-weight: 300;
`

const ErrorNumber = styled.p`
  color: #ff6060;
  font-size:288px;
  font-weight:700;
`

function Error() {
  const { theme } = useTheme()

  return (
    <ErrorWrapper theme={theme}>
      <ErrorNumber>404</ErrorNumber>
      <ErrorTitle theme={theme}>
        Oups! La page que vous demandez n’existe pas
      </ErrorTitle>
    </ErrorWrapper>
  )
}

export default Error
