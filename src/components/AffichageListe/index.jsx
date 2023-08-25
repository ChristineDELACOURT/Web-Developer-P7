import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../utils/style/colors';

const TagContainer = styled.div`
width:100%;
gap:10px;
display:flex;
flex-direction:flex-start;
`

const TagStyle = styled.h3`
min-width:115px;
height:25px;
font-size: 14px;
line-height:20px;
border-radius:10px;
background-color:${colors.primary};
color: ${colors.secondary};
text-align:center;
vertical-align:center;
padding: 0px 5px;
`

function AffichageListe({liste}) {
  console.log('liste ' , liste)
  
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