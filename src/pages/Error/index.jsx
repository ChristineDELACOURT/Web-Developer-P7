import styled from 'styled-components';
import { Link } from "react-router-dom";

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height:calc(100% - 252px);
    align-items: center;
`
const ErrorNumber = styled.h1`
  font-size:288px;
  font-weight:700;
  margin:0;
`
const ErrorTitle = styled.h2`
  font-size: 36px;
`

const StyledLink = styled(Link)`
  font-size: 18px;
  line-height:26px;
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorNumber>404</ErrorNumber>
      <ErrorTitle>
        Oups! La page que vous demandez n’existe pas
      </ErrorTitle>
        <StyledLink to="/">
          Retourner sur la page d'accueil
        </StyledLink>
    </ErrorWrapper>
  )
}

export default Error
