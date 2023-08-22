import React from "react";
import { Link } from "react-router-dom";
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse';
import styled from 'styled-components'
import colors from '../../utils/style/colors'
// import { Loader } from '../../utils/style/Atoms'
// import { useFetch, useTheme } from '../../utils/hooks'
import { useTheme } from '../../utils/hooks'
import aPropos from '../../datas/aPropos.json'
import imageMontagne from '../../assets/image_montagne_desktop.png'

const PageContainer = styled.div`
  width:100%;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  flex-wrap: wrap;
`
const CollapseContainer = styled.div`
  width:80%;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  flex-wrap: wrap;
`
// Récupération des commentaires dans le fichier aPropos.json
//const listCommentaires = aPropos.map((commentaire) => commentaire);
const listCommentaires = require('../../datas/aPropos.json');
console.log('listCommentaires ',listCommentaires);
const fiabilite = listCommentaires.fiabilite;
const respect = listCommentaires.respect;
const service = listCommentaires.service;
const securite = listCommentaires.securite;

const Apropos = () => {
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