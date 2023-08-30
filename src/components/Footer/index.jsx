import { useContext }from "react";
import { useLocation }from "react-router-dom";
import { ThemeContext } from '../../utils/context';
// Import des composants
import { FooterContainer } from '../../css/Footer';
import { FooterLogo } from '../../css/Footer';
import { FooterTitle } from '../../css/Footer';
// Import des paramètres
import Logo from '../../assets/dark-logo.png';

function Footer() {
  const page = useLocation().pathname;
  // On importe la taille de l'écran du contexte
  var mobile = useContext(ThemeContext);
  return (
    <FooterContainer style={{position:((mobile.mobile && page ===  "/Error") ? 'absolute' : 'relative'),
    bottom:((mobile.mobile && page ===  "/Error") ? '0px' : 'auto')}}>
      <FooterLogo src={Logo}/>
      <FooterTitle style={{fontSize:(mobile.mobile ? '12px' : '24px'),
          lineHeight:(mobile.mobile ? '17.11px' : '34.22px')}}>© 2020 Kasa. All rights reserved
      </FooterTitle>
    </FooterContainer>
  )
}

export default Footer
