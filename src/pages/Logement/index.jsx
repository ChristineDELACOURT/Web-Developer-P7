import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// Import des composants
import AffichageListe from '../../components/AffichageListe';
import AffichageTableau from '../../components/AffichageTableau';
import Photos from '../../components/Photos';
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse';
// Import de differents styles
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
gap:10px;
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
gap:20px;
`
const CollapseContainer = styled.div`
  width:46%;
  display: flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  flex-wrap: wrap;
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
      <CollapseContainer>
        <Collapse
          title="Description"
          content={logement?.description}
        />
        </CollapseContainer>
        <CollapseContainer>
        <Collapse
          title="Equipements"
          content={logement?.equipments}
        />
        </CollapseContainer>
      </DescriptionEquipementsContainer>

    </PageContainer>
  )
};

export default Logement;



