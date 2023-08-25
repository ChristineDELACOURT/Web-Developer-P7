import React, { useState } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AlbumContainer = styled.div`
  width:100%;
  height:415px;
  display: flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap: wrap;
  background-size: cover;
  background-position: center;
  border-radius: 25px;
`
const ChevronLeft = styled.p`
  margin-left: 20px;
  font-size: 80px;
`

const ChevronRight = styled.div`
margin-right: 20px;
  font-size: 80px;
`

function Photos({ album }) {
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
  console.log('nombrePhotos : ' , nombrePhotos)
  var image = album[actuelle];
  console.log('image : ' , image)
  
  return ( 
      <AlbumContainer style={{ 
        backgroundImage:`url("${image}")`}}>
        <ChevronLeft onClick={imagePrecedante}>
          <i className="fa-solid fa-chevron-left" style={{color:'#ffffff'}}></i>
        </ChevronLeft>
        <ChevronRight onClick={imageSuivante}>
          <i className="fa-solid fa-chevron-right" style={{color:'#ffffff'}}></i>
        </ChevronRight>     
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