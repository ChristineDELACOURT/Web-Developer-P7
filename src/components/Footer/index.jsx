import { useContext }from "react";
import styled from 'styled-components';
import { ThemeContext } from '../../utils/context';
import colors from '../../utils/style/colors';
import Logo from '../../assets/dark-logo.png';

const FooterContainer = styled.footer`
  width:100%;
  height:169px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top:40px;
  background:${colors.quaternary};
`
const FooterLogo = styled.img`
  height:39.44px;
  align-self: center;
`
const FooterTitle = styled.h5`
  text-align: center;
  color:${colors.secondary};
`

function Footer() {
  // On importe la taille de l'écran du contexte
  var mobile = useContext(ThemeContext);
  return (
    <FooterContainer>
      <FooterLogo src={Logo}/>
      <FooterTitle style={{fontSize:(mobile.mobile ? '12px' : '24px'),
          lineHeight:(mobile.mobile ? '17.11px' : '34.22px')}}>© 2020 Kasa. All rights reserved
      </FooterTitle>
    </FooterContainer>
  )
}

export default Footer
