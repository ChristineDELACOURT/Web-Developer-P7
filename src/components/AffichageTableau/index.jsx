import React from 'react';
import PropTypes from 'prop-types';
import { useContext }from "react";
import { ThemeContext } from '../../utils/context';
// Import des composants
import { Liste } from '../../css/AffichageTableau';
import { Item } from '../../css/AffichageTableau';

function AffichageTableau({tableau}) {
  // On importe la taille de l'écran du contexte
  var mobile = useContext(ThemeContext);
    return (
      <Liste key={tableau[0].toString()}  style={{minHeight:(mobile.mobile ? '143.32px' : '189px')}}>
        {tableau.map((equipment) => {
          return (
          <Item key={equipment.toString()} style={{fontSize:(mobile.mobile ? '12px' : '17.11px'),
          lineHeight:(mobile.mobile ? '18px' : '25.67px')}}>{equipment}</Item>
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