import styled from 'styled-components';
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
  height:40px;
  align-self: center;
`
const FooterTitle = styled.h5`
  weight:500;
  font-size: 24px;
  text-align: center;
  line-height:35px;
  color:${colors.secondary};
`

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src={Logo}/>
      <FooterTitle>© 2020 Kasa. All rights reserved
      </FooterTitle>
    </FooterContainer>
  )
}

export default Footer
