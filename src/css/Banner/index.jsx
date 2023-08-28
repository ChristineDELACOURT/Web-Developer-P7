import styled from 'styled-components';
// Import des paramètres
import colors from '../../utils/style/colors';

// Définition de la balise BannerWrapper qui englobe 
// BannerTitle et BannerImage
export const BannerWrapper = styled.div`
  width:100%;
`
export const BannerTitle = styled.h1`
  max-width:'1240px';
  position:relative;
  z-index:1;
  text-align: center;
  color:${colors.secondary};
`
export const BannerImage = styled.img`
  width:100%;
  object-fit: cover;
  align-self: center;
  filter: brightness(65%);
`
