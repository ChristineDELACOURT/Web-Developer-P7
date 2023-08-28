import React , { useContext } from "react";
import { ThemeContext } from '../../utils/context';
// Import des composants
import { ErrorWrapper } from '../../css/Error';
import { ErrorNumber } from '../../css/Error';
import { ErrorTitle } from '../../css/Error';
import { StyledLink } from '../../css/Error';

function Error() {
  // On importe la taille de l'écran du contexte
  var mobile = useContext(ThemeContext);
  return (
    <ErrorWrapper>
      <ErrorNumber 
        style={{fontSize:(mobile.mobile ? '96px' : '288px'),
        lineHeight:(mobile.mobile ? '137px' : '411px')}}>
        404
      </ErrorNumber>
      <ErrorTitle
        style={{fontSize:(mobile.mobile ? '18px' : '36px'),
        lineHeight:(mobile.mobile ? '25.67px' : '51.34px')}}>
        Oups! La page que vous demandez n’existe pas
      </ErrorTitle>
      <StyledLink 
        style={{fontSize:(mobile.mobile ? '14px' : '18px'),
        lineHeight:(mobile.mobile ? '19.96px' : '25.67px')}} to="/">
        Retourner sur la page d'accueil
      </StyledLink>
    </ErrorWrapper>
  )
}

export default Error
