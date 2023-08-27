import React , { useContext } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { ThemeContext } from '../../utils/context';

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
`
const ErrorNumber = styled.h1`
  font-weight:700;
`
const ErrorTitle = styled.h2`
  
`

const StyledLink = styled(Link)`
margin-top:60px;  
`

function Error() {
  // On importe la taille de l'écran du contexte
  var mobile = useContext(ThemeContext);
  console.log('mobile dans Error :' , mobile.mobile);
  var fontSizeErrorNumber;
  var lineHeightErrorNumber;
  let fontSizeErrorTitle = '18px';
  let lineHeightErrorTitle = '25.67px';
  let fontSizeStyledLink = '14px';
  let lineHeightStyledLink = '19.96px';
  ((mobile.mobile)) ? 
    ( (fontSizeErrorNumber = '96px') && 
    (lineHeightErrorNumber = '137px') &&
    (fontSizeErrorTitle = '18px') && 
    (lineHeightErrorTitle = '25.67px') &&
    (fontSizeStyledLink = '14px') && 
    (lineHeightStyledLink = '19.96px')  
    ) :
   ((fontSizeErrorNumber = '288px') && 
   (lineHeightErrorNumber = '411px') &&
   (fontSizeErrorTitle = '36px') && 
   (lineHeightErrorTitle = '51.34pxpx') &&
   (fontSizeStyledLink = '18px') && 
   (lineHeightStyledLink = '25.67px')  )
  return (
    <ErrorWrapper>
      <ErrorNumber 
        style={{fontSize:fontSizeErrorNumber,lineHeight:lineHeightErrorNumber}}>
          404
      </ErrorNumber>
      <ErrorTitle
      style={{fontSize:fontSizeErrorTitle,lineHeight:lineHeightErrorTitle}}>
        Oups! La page que vous demandez n’existe pas
      </ErrorTitle>
        <StyledLink 
        style={{fontSize:fontSizeStyledLink,lineHeight:lineHeightStyledLink}} to="/">
          Retourner sur la page d'accueil
        </StyledLink>
    </ErrorWrapper>
  )
}

export default Error
