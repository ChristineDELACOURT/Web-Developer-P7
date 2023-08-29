import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../utils/context';
// Import des composants
import AffichageListe from '../../components/AffichageListe';
import Photos from '../../components/Photos';
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse';
import Error from '../Error';
import { PageContainer } from '../../css/Fiche-Logement';
import { TitreAvisContainer } from '../../css/Fiche-Logement';
import { TitreContainer } from '../../css/Fiche-Logement';
import { AvisContainer } from '../../css/Fiche-Logement';
import { IdentiteContainer } from '../../css/Fiche-Logement';
import { Titre } from '../../css/Fiche-Logement';
import { SousTitre } from '../../css/Fiche-Logement';
import { Host } from '../../css/Fiche-Logement';
import { Picture } from '../../css/Fiche-Logement';
import { DescriptionEquipementsContainer } from '../../css/Fiche-Logement';
import { CollapseContainer } from '../../css/Fiche-Logement';
// Import de la liste des logements
const logementList = require('../../datas/logementList');

function Logement () {
  // On recherche d'id du logement dans l'url de la page
  const url = useParams().id;
  var logement;
  // On affecte les attributs en responsive
  // Le mobile a une largeur de 320px à 768px
  var mobile = useContext(ThemeContext);
  // On liste les url valides
  let listeId = logementList.map((card) => {
    return (      
      card.id
    )
  })
  // On récupère le logement qui nous intéresse
  var logement = logementList.find(card => card.id === url);
  // Si l url n'est pas valide on renvoie sur la page Error (404)
    if (listeId.indexOf(url) === -1 ) {
      return <Error />;
    }else{
  return (
    <PageContainer>
        <Photos album={logement.pictures} />
        <TitreAvisContainer style={{flexDirection:(mobile.mobile ? 'column' : 'row')}}>
        <TitreContainer style={{width:(mobile.mobile ? '100%' : '70%')}}>
          <Titre>{logement.title}</Titre>
          <SousTitre>{logement.location}</SousTitre>
          <AffichageListe liste={logement.tags}></AffichageListe>
        </TitreContainer>
        <AvisContainer style={{flexDirection:(mobile.mobile ? 'row-reverse' : 'column')}}>
          <IdentiteContainer>
            <Host>{logement.host.name}</Host>
            <Picture src={logement.host.picture} alt="Photo propriétaire" />
          </IdentiteContainer>
          <Rating nombreEtoiles={logement.rating}></Rating>
        </AvisContainer>
      </TitreAvisContainer>
      <DescriptionEquipementsContainer  style={{flexDirection:(mobile.mobile ? 'column' : 'row')}}>
          <CollapseContainer style={{width:(mobile.mobile ? '100%' : '46%')}}>
            <Collapse
              title="Description"
              content={logement.description} />
          </CollapseContainer>
          <CollapseContainer style={{width:(mobile.mobile ? '100%' : '46%')}}>
            <Collapse
              title="Equipements"
              content={logement.equipments} />
          </CollapseContainer>
        </DescriptionEquipementsContainer>
    </PageContainer>
  )
};
};

export default Logement;



