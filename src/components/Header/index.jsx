import { useContext }from "react";
import styled from 'styled-components';
import { ThemeContext } from '../../utils/context';
// Imports des liens pour la navigation 
import { Link ,  useLocation} from 'react-router-dom';
import Logo from '../../assets/light-logo.png';

const HomeLogo = styled.img` 
`

const LinkContainer = styled.div` 
`

const NavContainer = styled.nav`
  padding: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled(Link)`
  line-height: 34px;
  padding: 10px 15px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`

function Header() {
  // On importe la taille de l'écran du contexte
  var mobile = useContext(ThemeContext);
  // on recupere le contexte de la page (Home, A-Propos ou autre)
  const page = useLocation().pathname;
  // on met le style "underline" sur le lien de la page en cours
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={Logo} style={{ height:(mobile.mobile ? '47px' : '68px')}}/>
      </Link>
      <LinkContainer>
        <StyledLink style={{ textDecoration:(page ===  "/" ? 'underline' : 'none'),
          fontSize:(mobile.mobile ? '12px' : '24px'),
          lineHeight:(mobile.mobile ? '17.11px' : '34.22px')}} to="/">
          Accueil
        </StyledLink>
        <StyledLink style={{ textDecoration:(page ===  "/Apropos" ? 'underline' : 'none'),
          fontSize:(mobile.mobile ? '12px' : '24px'),
          lineHeight:(mobile.mobile ? '17.11px' : '34.22px')}} to="/Apropos">
          A-Propos
        </StyledLink>
      </LinkContainer>
    </NavContainer>
  )
}

export default Header
