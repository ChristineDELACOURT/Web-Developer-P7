import { useParams } from 'react-router-dom';
import styled from 'styled-components';
// Import des composants
import AffichageListe from '../../components/AffichageListe';
import Photos from '../../components/Photos';
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse';
// Import du loader
//import { Loader } from '../../utils/style/Atoms';
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
  margin:25px 0px;
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
  justify-content:space-around;
  flex-wrap: wrap;
`
const IdentiteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:10px;
  justify-content: space-around;
  align-items:center;
`

const Titre = styled.h1`
  font-size: 36px;
  line-height:51px;
`
const SousTitre = styled.h2`
  font-size: 18px;
  line-height:26px;
  margin:10px 0;
`

const Host = styled.h4`
  width:93px;
  height:52px;
  font-size: 12px;
  line-height:17px;
  text-align:right;
`
const Picture = styled.img`
  width:64px;
  height:64px;
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

function Logement () {
  //on recherche d'id du logement dans l'url de la page
  const url = useParams();
  const idLogement = url.id;
  let logement = logementList.find(card => card.id === idLogement);
  //if (typeof(logement.title) === 'undefined') {
  //  return console.log('probleme logement = ' , logement)
  //}
  //console.log('logement = ' , logement)
  return (
    <PageContainer>                   
      <Photos album={logement.pictures} />
      <TitreAvisContainer>
        <TitreContainer>
          <Titre>{logement.title}</Titre>
          <SousTitre>{logement.location}</SousTitre>
          <AffichageListe tags={logement.tags}></AffichageListe>
        </TitreContainer>
        <AvisContainer>
          <IdentiteContainer>
            <Host>{logement.host.name}</Host>
            <Picture src={logement.host.picture} alt="Photo propriétaire"  />
          </IdentiteContainer>
          <Rating nombreEtoiles={logement.rating}></Rating>
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



