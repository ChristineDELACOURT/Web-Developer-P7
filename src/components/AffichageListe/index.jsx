import React from 'react';
import PropTypes from 'prop-types';
// Import des composants
import { TagContainer } from '../../css/AffichageListe';
import { TagStyle } from '../../css/AffichageListe';

function AffichageListe({liste}) {
  return (
    <TagContainer key={liste[0]}>
      {liste.map((tag,index) => {
        return (
          <TagStyle key={index}>{tag}</TagStyle>
        );
      })}
    </TagContainer>
  );
};

// Propriété de la props tags
AffichageListe.propTypes = {
  tags: PropTypes.array,
}

TagStyle.propTypes = {
  tag: PropTypes.string,
}

// Valeur par défaut de la props tags
AffichageListe.defaultProps = {
  tags: [],
}

TagStyle.defaultProps = {
  tag: '',
}

export default AffichageListe;