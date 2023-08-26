import React from "react";
import styled from 'styled-components';
// Import des composants
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import imageMontagne from '../../assets/image_montagne_desktop.png';

const PageContainer = styled.div`
  width:100%;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  flex-wrap: wrap;
`
const CollapseContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  flex-wrap: wrap;
  width:80%;
  gap:31px;
  padding:31px 108px;
`
// Récupération des commentaires dans le fichier aPropos.json
// c'est in fichier json simple
const listCommentaires = require('../../datas/aPropos.json');
// console.log('listCommentaires ',listCommentaires);
const fiabilite = listCommentaires.fiabilite;
const respect = listCommentaires.respect;
const service = listCommentaires.service;
const securite = listCommentaires.securite;

// On affiche 4 paragraphes fermés par défaut

function Apropos () {
    return (
    <PageContainer>
      <Banner title='' cover={imageMontagne} />
      <CollapseContainer>
      <Collapse
          title="Fiabilité" 
          content={fiabilite}
        />
        <Collapse
          title="Respect" 
          content={respect}
        />
        <Collapse
          title="Service" 
          content={service}
        />
        <Collapse
          title="Sécurité" 
          content={securite}
        />
        </CollapseContainer>
    </PageContainer>

  );
};

export default Apropos;