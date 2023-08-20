import { useTheme } from '../../utils/hooks'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import LightLogo from '../../assets/light-logo.png'
import DarkLogo from '../../assets/dark-logo.png'

const FooterContainer = styled.footer`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  background:black;
`
const FooterLogo = styled.img`
  height:40px;
  align-self: center;
`
const FooterTitle = styled.h5`
  weight:500;
  font-size: 24px;
  text-align: center;
  color:#ffffff;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`

function Footer() {
  const { toggleTheme, theme } = useTheme()

  return (
    <FooterContainer>
      <FooterLogo src={theme === 'light' ? DarkLogo : LightLogo }/>
      <FooterTitle>© 2020 Kasa. All rights reserved
      </FooterTitle>
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  )
}

export default Footer
