import styled from 'styled-components';
// Imports des liens pour la navigation 
import { Link ,  useLocation} from 'react-router-dom';
import { StyledLink } from '../../utils/style/Atoms';
import Logo from '../../assets/light-logo.png';

const HomeLogo = styled.img`
  height: 68px;
`
const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  // Initialisation du style des liens
  let textDecorationHome = "none";
  let textDecorationAPropos = "none";
  // on recupere le contexte de la page
  const page = useLocation().pathname;
  // on met le style "underline" sur le lien de la page en cours
  //console.log('pathname dans header ' ,page);
  if (page ===  "/") {
    (textDecorationHome = "underline") && (textDecorationAPropos = "none")
  }else if (page ===  "/Apropos") {
   (textDecorationHome = "none") && (textDecorationAPropos = "underline")
  }else{
   (textDecorationHome = "none") && (textDecorationAPropos = "none")
  }
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={Logo}/>
      </Link>
      <div>
        <StyledLink style={{ textDecoration:textDecorationHome}} to="/">
          Accueil
        </StyledLink>
        <StyledLink style={{ textDecoration:textDecorationAPropos}} to="/Apropos">
          A-Propos
        </StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
