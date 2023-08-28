import React from "react";
// Import des composants
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import { PageContainer } from '../../css/APropos';
import { CollapseContainer } from '../../css/APropos';
// Import de l image
import imageMontagne from '../../assets/image_montagne_desktop.png';

// Récupération des commentaires dans le fichier aPropos.json
// c'est un fichier json simple
const listCommentaires = require('../../datas/aPropos.json');

// On affiche 4 paragraphes fermés par défaut

function Apropos () {
    return (
    <PageContainer>
      <Banner title='' cover={imageMontagne} />
      <CollapseContainer>
      <Collapse
          title="Fiabilité" 
          content={listCommentaires.fiabilite}
      />
      <Collapse
        title="Respect" 
        content={listCommentaires.respect}
      />
      <Collapse
        title="Service" 
        content={listCommentaires.service}
      />
      <Collapse
        title="Sécurité" 
        content={listCommentaires.securite}
      />
        </CollapseContainer>
    </PageContainer>

  );
};

export default Apropos;