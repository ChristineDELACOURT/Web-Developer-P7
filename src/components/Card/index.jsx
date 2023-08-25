import PropTypes from 'prop-types';
import styled from 'styled-components';
// Import d une image par défaut
import DefaultPicture from '../../assets/image_mer_desktop.png';

const CardWrapper = styled.div`
  height: 340px;
  width: 340px;
  padding: 0px;
  position:relative;
  z-index:0;
  border-radius: 10px;
`
// On met un léger voile noir poir augmenter le contraste avec le texte
const CardOmbre = styled.div`
  width: 340px;
  height:60px;
  border-radius: 10px;
  background: linear-gradient(to bottom, transparent 0%,hsla(0,0%,0%,.8) 100%);
  position:absolute;
  bottom:0px;
  z-index:1;
`

const CardTitle = styled.h2`
  width: 200px;
  color:#ffffff;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  align-self: left;
  text-decoration:none;
  position:absolute;
  bottom:0px;
`

const CardImage = styled.img`
  height: 340px;
  width: 340px;
  border-radius: 10px;
  object-fit: cover;
  align-self: center;
  position:absolute;
  z-index:1;
`

function Card({ title, cover}) {
  return (
    <CardWrapper>
      <CardImage src={cover} alt="Photo logement" />
      <CardOmbre>
        <CardTitle>{title}</CardTitle>
      </CardOmbre>
    </CardWrapper>
  )
}

// Propriété des props title et cover
Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

// Valeurs par défaut des props title et cover
Card.defaultProps = {
  title: '',
  cover: DefaultPicture,
}

export default Card
