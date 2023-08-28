import styled from 'styled-components';
// Import des paramètres
import colors from '../../utils/style/colors';

export const FooterContainer = styled.footer`
  width:100%;
  height:169px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top:40px;
  background:${colors.quaternary};
`
export const FooterLogo = styled.img`
  height:39.44px;
  align-self: center;
`
export const FooterTitle = styled.h5`
  text-align: center;
  color:${colors.secondary};
`
