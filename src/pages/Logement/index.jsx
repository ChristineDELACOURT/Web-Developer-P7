import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// Import des composants
import AffichageListe from '../../components/AffichageListe';
import AffichageTableau from '../../components/AffichageTableau';
import Photos from '../../components/Photos';
import Rating from '../../components/Rating';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atoms';
import { SurveyContext } from '../../utils/context';
import { useFetch, useTheme } from '../../utils/hooks';
const logementList = require('../../datas/logementList');



  

const PageContainer = styled.div`
  width:100%;
  display: flex;
  flex-wrap: wrap;
`

const TitreAvisContainer = styled.div`
width:100%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`
const TitreContainer = styled.div`
max-width:70%;
display:flex;
flex-direction:column;
flex-wrap: wrap;
`
const AvisContainer = styled.div`
display: flex;
flex-direction:column;
flex-wrap: wrap;
`
const IdentiteContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items:center;
`

const Titre = styled.h1`
font-size: 36px;
line-height:51px;
`
const SousTitre = styled.h2`
font-size: 18px;
line-height:26px;
`

const Host = styled.h4`
font-size: 18px;
line-height:26px;
`
const Picture = styled.img`
width:52px;
height:52px;
border-radius:50%;
`

const DescriptionEquipementsContainer = styled.div`
width:100%;
display:flex;
justify-content: space-between;
flex-wrap:wrap;
`
const DescriptionContainer = styled.div`
width:46%;
display: flex;
flex-direction:column;
justify-content: flex-start;
flex-wrap: wrap;
`
const EquipementsContainer = styled.div`
width:46%;
display: flex;
flex-direction:column;
justify-content: flex-start;
flex-wrap: wrap;
`
const TitreDescriptionEquipementsContainer = styled.h2`
height:26px;
font-size: 18px;
weight:500;
line-height:26px;
border-radius:10px;
background-color:${colors.primary};
color: ${colors.secondary};
margin:0;
padding:13px 20px;
`
const TexteDescription = styled.h2`
font-size: 18px;
weight:500;
line-height:26px;
`


const Logement = () => {
  //on recherche d'id du logement dans l'url de la page
  var url = document.location.href; 
  let idLogement = 0;
  var mots = url.split('/logement/');
  idLogement = mots[1];
  console.log('idLogement ' + idLogement)
  let logement = logementList.find(card => card.id === idLogement);
  console.log('logement = ' , logement)
  return (
    <PageContainer>                   
      <Photos slides={logement.pictures} />
      <TitreAvisContainer>
        <TitreContainer>
          <Titre>{logement.title}</Titre>
          <SousTitre>{logement.location}</SousTitre>
          <AffichageListe props={logement.tags}></AffichageListe>
        </TitreContainer>
        <AvisContainer>
          <IdentiteContainer>
            <Host>{logement.host.name}</Host>
            <Picture src={logement.host.picture} alt="Photo propriétaire"  />
          </IdentiteContainer>
          <Rating props={logement.rating}></Rating>
        </AvisContainer>
      </TitreAvisContainer>

      <DescriptionEquipementsContainer>
        <DescriptionContainer>
          <TitreDescriptionEquipementsContainer>
            Description
          </TitreDescriptionEquipementsContainer>
          <TexteDescription>
            {logement.description}
          </TexteDescription>
        </DescriptionContainer>
        <EquipementsContainer>
          <TitreDescriptionEquipementsContainer>
            Equipements
          </TitreDescriptionEquipementsContainer>
          <AffichageTableau props={logement.equipments}>
          </AffichageTableau>
        </EquipementsContainer>
      </DescriptionEquipementsContainer>

    </PageContainer>
  )
};

export default Logement;



