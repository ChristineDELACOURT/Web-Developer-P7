import React, { useState } from "react";
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import AffichageTableau from '../../components/AffichageTableau';

const Container = styled.div`
width:46%;
display: flex;
flex-direction:column;
justify-content: flex-start;
flex-wrap: wrap;
`

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
font-size: 18px;
line-height:26px;
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
line-height:26px;
margin:0;
padding: 20px 0;
`

const Collapse = ({ title, content }) => {
  //declaration du state en utilisant le Hook useState()
  const [isOpen, setIsOpen] = useState(false); // je definie le state du toggle (et false par défaut)
  var contentType = typeof(content);
  console.log('typeof({content}) ',typeof(content));
  console.log('contentType ' ,contentType);
  //fonction pour gérer l'afichage du contenu des collapses
  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    // affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
    <Container>
      <TitreDescriptionEquipementsContainer>
        <Titre>{title}</Titre>
        <Chevron onClick={display}>
          {isOpen ? (
            <i className="fa-solid fa-chevron-up" style={{color:'#ffffff'}}></i>
          ) : (
            <i className="fa-solid fa-chevron-down" style={{color:'#ffffff'}}></i>
          )}
        </Chevron>
      </TitreDescriptionEquipementsContainer>
      {/* Si le collapse est à TRUE alors il affichera la description */}
      <ContenuContainer>
      {(isOpen && (contentType === 'string'))? (
              
                  <Contenu>{content}</Contenu>
        ):(<div></div>)   
      }
      {(isOpen && (contentType !== 'string'))? (
                <AffichageTableau props={content}></AffichageTableau>
        ):(<div></div>)   
      }
         
      </ContenuContainer>
    </Container>
  );
  
};
// isOpen && (typeof({content}) === 'string')
export default Collapse;