import React, { useState , useContext } from "react";
import styled from 'styled-components';
import { ThemeContext } from '../../utils/context';
import PropTypes from 'prop-types';
// import des paramètres
import colors from '../../utils/style/colors';
// Import des composants
import AffichageTableau from '../../components/AffichageTableau';

const Container = styled.div`
width:100%;
display: flex;
flex-direction:column;
justify-content: flex-start;
flex-wrap: wrap;
`

// Container contenant les 2 collapses
const TitreDescriptionEquipementsContainer = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:no-wrap;
border-radius:10px;
height:52px;
background-color:${colors.primary};
margin:0;
`

const Titre = styled.h2`
color: ${colors.secondary};
margin:0;
padding:13px 20px;
`
const Chevron = styled.p`
margin:0;
padding:13px 20px;
`
const ContenuContainer = styled.div`
background-color:${colors.ternary};
padding: 5px 0;
`

const Contenu = styled.p`
font-size: 18px;
weight:400;
line-height:26px;
margin:0;
padding: 20px 0;
`
function Collapse({ title, content}) {
  // On importe la taille de l'écran du contexte
  var mobile = useContext(ThemeContext);
  // on met l etat de switchDisplay à false par défaut
  const [switchDisplay, setSwitchDisplay] = useState(false);
  var contentType = typeof(content);
  // switchDisplay sera true ou false à chaque appel de display
  function display () {
    setSwitchDisplay(!switchDisplay);
  };
  // A chaque onClick, le chevron change de sens
  // et le texte apparaît ou disparaît
  return (
    <Container>
      <TitreDescriptionEquipementsContainer>
        <Titre style={{fontSize:(mobile.mobile ? '13px' : '18px'),
          lineHeight:(mobile.mobile ? '18px' : '25.67px')}}>{title}</Titre>
        <Chevron onClick={display}>
          {switchDisplay ? (
            <i className="fa-solid fa-chevron-up" style={{color:'#ffffff'}}></i>
          ) : (
            <i className="fa-solid fa-chevron-down" style={{color:'#ffffff'}}></i>
          )}
        </Chevron>
      </TitreDescriptionEquipementsContainer>
      
      <ContenuContainer>
      {(switchDisplay && (contentType === 'string'))? (    
        <Contenu  style={{fontSize:(mobile.mobile ? '12px' : '17.11px'),
        lineHeight:(mobile.mobile ? '18px' : '25.67px')}}>{content}</Contenu>
        ):(<div></div>)   
      }
      {(switchDisplay && (contentType !== 'string'))? (
        <AffichageTableau tableau={content}></AffichageTableau>
        ):(<div></div>)   
      }
      </ContenuContainer>
    </Container>
  );
  
};

// La props content eput être soit un tableau ou une ListeLogements.
// Elle sera affichée différemment selon le cas :
// --> Contenu : affichage d une liste
// --> AffichageTableau : affichage d un tableau


// Propriété de la props title
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
}

// Valeurs par défaut de la props title
Collapse.defaultProps = {
  title: '',
}

export default Collapse;