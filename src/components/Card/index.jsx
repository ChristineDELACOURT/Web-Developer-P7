import { useContext }from "react";
import { ThemeContext } from '../../utils/context';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// Import d une image par défaut
import DefaultPicture from '../../assets/image_mer_desktop.png';

const CardWrapper = styled.div`
  padding: 0px;
  position:relative;
`
// On met un léger voile noir pour augmenter le contraste avec le texte
const CardOmbre = styled.div`
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
  border-radius: 10px;
  object-fit: cover;
  align-self: center;
  position:absolute;
  z-index:1;
`

function Card({ title, cover}) {
  var mobile = useContext(ThemeContext);
  return (
    <CardWrapper style={{width:(mobile.mobile ? '335px' : '340px'),
    height:(mobile.mobile ? '255px' : '340px')}}>
      <CardImage src={cover} style={{width:(mobile.mobile ? '335px' : '340px'),
        height:(mobile.mobile ? '255px' : '340px')}} alt="Photo logement" />
      <CardOmbre style={{width:(mobile.mobile ? '335px' : '340px')}}>
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
