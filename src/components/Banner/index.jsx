import PropTypes from 'prop-types';
import styled from 'styled-components';
// Import des paramètres
import colors from '../../utils/style/colors';
// Import d une image par défaut
import DefaultPicture from '../../assets/image_mer_desktop.png';

// Définition de la balise BannerWrapper qui englobe 
// BannerTitle et BannerImage
const BannerWrapper = styled.div`
  width:100%;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
  }
`

const BannerTitle = styled.h1`
  width:100%;
  position:relative;
  z-index:1;
  font-size: 30px;
  text-align: center;
  top:-140px;
  color:${colors.secondary};
`
const BannerImage = styled.img`
  width:100%;
  border-radius:0.8em;
  height: 223px;
  border-radius: 30px;
  object-fit: cover;
  align-self: center;
  filter: brightness(65%);
`

function Banner({ title, cover}) {
  return (
    <BannerWrapper>
      <BannerImage src={cover} alt="Photo paysage" /> 
      <BannerTitle>{title}</BannerTitle>
    </BannerWrapper>
  )
}

// Propriété des props title et cover
Banner.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

// Valeurs par défaut des props title et cover
Banner.defaultProps = {
  title: '',
  cover: DefaultPicture,
}

export default Banner
