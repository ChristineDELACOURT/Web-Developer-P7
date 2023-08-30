import React from 'react';
import PropTypes from 'prop-types';
import { useContext }from "react";
import { ThemeContext } from '../../utils/context';
// Import des composants
import { Stars } from '../../css/Rating';
// Import des paramètres
import colors from '../../utils/style/colors';

function Rating({nombreEtoiles}) {
  // On importe la taille de l'écran du contexte
  var mobile = useContext(ThemeContext);
  const notes = [1, 2, 3, 4, 5];
  // On balaye les notes de 1 à 5 et on affiche les étoiles
  // L'étoile est rose si le nombre d étoile est supérieur ou égal à la note
  // l'étoile est gris clair si le nombre d étoile est inférieur à la note
  return (
    <Stars style={{width:(mobile.mobile ? '98px' : '196px'),height:(mobile.mobile ? '18px' : '24px')}}>
      {notes.map((note) =>
        nombreEtoiles >= note ? (
          <i key={note.toString()} className="fa-solid fa-star" style={{color:colors.primary,fontSize:(mobile.mobile ? '13px' : '24px')}}></i>
        ) : (
          <i key={note.toString()} className="fa-solid fa-star" style={{color:colors.five,fontSize:(mobile.mobile ? '13px' : '24px')}}></i>
        )
      )}
    </Stars>
  );
}

// Propriété de la props nombreEtoiles
Rating.propTypes = {
  nombreEtoiles: PropTypes.string,
}

// Valeurs par défaut de la props nombreEtoiles
Rating.defaultProps = {
  nombreEtoiles: 0,
}

export default Rating;