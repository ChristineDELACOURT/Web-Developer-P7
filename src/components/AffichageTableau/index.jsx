import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Liste = styled.ul`
width:100%;
list-style-type: none;
padding: 33px 16px;
`

const Item = styled.li`
Weight:400;
Size:18px;
Line height:25.67px;
`

function AffichageTableau({tableau}) {
  console.log('props tableau ' , tableau)
    return (
      <Liste key={tableau[0]}>
        {tableau.map((equipment) => {
          return (
          <Item key={equipment}>{equipment}</Item>
          );
        })}
    </Liste>
  );
};

// Propriété de la props tableau
AffichageTableau.propTypes = {
  tableau: PropTypes.array,
}

// Valeur par défaut de la props tableau
AffichageTableau.defaultProps = {
  tableau: [],
}

export default AffichageTableau;