import React, { useState , useContext } from "react";
import { ThemeContext } from '../../utils/context';
import PropTypes from 'prop-types';
// Imports des liens pour la navigation 
import { useLocation} from 'react-router-dom';
// import des paramètres
import colors from '../../utils/style/colors';
// Import des composants
import { Container } from '../../css/Collapse';
import { TitreDescriptionEquipementsContainer } from '../../css/Collapse';
import { Titre } from '../../css/Collapse';
import { Chevron } from '../../css/Collapse';
import { ContenuContainer } from '../../css/Collapse';
import { Contenu } from '../../css/Collapse';
import AffichageTableau from '../../components/AffichageTableau';

function Collapse({ title, content}) {
  // on recupere le contexte de la page (Home, A-Propos ou autre)
  const page = useLocation().pathname;
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
            <i className="fa-solid fa-chevron-up"   style={{color:colors.secondary,fontSize:(mobile.mobile ? '18.42px' : '32px')}}></i>
          ) : (
            <i className="fa-solid fa-chevron-down" style={{color:colors.secondary,fontSize:(mobile.mobile ? '18.42px' : '32px')}}></i>
          )}
        </Chevron>
      </TitreDescriptionEquipementsContainer>
      
      <ContenuContainer style={{borderRadius:(page ===  "/Apropos" ? '0px' : '10px')}}>
      {(switchDisplay && (contentType === 'string'))? (    
        <Contenu style={{fontSize:(mobile.mobile ? '12px' : '17.11px'),
        lineHeight:(mobile.mobile ? '18px' : '25.67px'),
        minHeight:(page ===  "/Apropos" ? 'auto' : (mobile.mobile ? '103.32px' : '209px'))
      }}>{content}</Contenu>
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

// La props content peut être soit un tableau ou une ListeLogements.
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