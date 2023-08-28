import React from 'react';
import PropTypes from 'prop-types';
// Import des composants
import { Stars } from '../../css/Rating';
// Import des paramètres
import colors from '../../utils/style/colors';

function Rating({nombreEtoiles}) {
  const notes = [1, 2, 3, 4, 5];
  // On balaye les notes de 1 à 5 et on affiche les étoiles
  // L'étoile est rose si le nombre d étoile est supérieur ou égal à la note
  // l'étoile est gris clair si le nombre d étoile est inférieur à la note
  return (
    <Stars>
      {notes.map((note) =>
        nombreEtoiles >= note ? (
          <i key={note} className="fa-solid fa-star" style={{color:colors.primary,fontSize:23}}></i>
        ) : (
          <i key={note} className="fa-solid fa-star" style={{color:colors.five,fontSize:23}}></i>
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