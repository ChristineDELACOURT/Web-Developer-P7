import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useContext }from "react";
import { ThemeContext } from '../../utils/context';
// Import des paramètres
import colors from '../../utils/style/colors';
// Import des composants
import { AlbumContainer } from '../../css/Photos';
import { PhotoContainer } from '../../css/Photos';
import { ChevronLeft  } from '../../css/Photos';
import { ChevronRight } from '../../css/Photos';
import { Vide } from '../../css/Collapse';
import { Compteur } from '../../css/Photos';

function Photos({ album }) {
  // On importe la taille de l'écran du contexte
  var mobile = useContext(ThemeContext);
  // l'état de la première photo est 0
  const [actuelle, setProchaine] = useState(0); 
  // nombre de photos dans l'album
  const nombrePhotos =  album.length; 
  // Si album n'est pas un tableau ou qu'il est vide on arrête
  if (!Array.isArray(album) || nombrePhotos < 1) {
    return null;
  }
  // L opérateur modulo est utilisé pour boucler sur les images
  // l image suivante repasse à l image de depart si l album est fini
  const imageSuivante = () => {
    setProchaine((actuelle + 1 ) % nombrePhotos);
  };
  // l image precedante repassse a l'image de fin si on est au debut de l'album
  const imagePrecedante = () => {
    setProchaine((nombrePhotos + actuelle - 1 ) % nombrePhotos);
  };
  // console.log('nombrePhotos : ' , nombrePhotos)
  var image = album[actuelle];
  
  return ( 
      <AlbumContainer style={{ 
        backgroundImage:`url("${image}")`}}>
      <PhotoContainer>
      {(nombrePhotos > 1)? (    
        <ChevronLeft onClick={imagePrecedante}>
          <i className="fa-solid fa-chevron-left" style={{color:colors.secondary,fontSize:(mobile.mobile ? '40px' : '80px')}}></i>
        </ChevronLeft>
        ):(<Vide/>)   
      }
      {(nombrePhotos > 1)? (    
        <ChevronRight onClick={imageSuivante}>
          <i className="fa-solid fa-chevron-right" style={{color:colors.secondary,fontSize:(mobile.mobile ? '40px' : '80px')}}></i>
        </ChevronRight> 
        ):(<Vide/>)
      }
      </PhotoContainer>  
      {(nombrePhotos > 1 && !mobile.mobile)? (   
        <Compteur>{actuelle + 1}/{nombrePhotos}</Compteur>
        ):(<Vide/>)
      }
      </AlbumContainer>
        );
      }

Photos.propTypes = {
  album: PropTypes.array.isRequired,
}

Photos.defaultProps = {
  album: [],
}

export default Photos;