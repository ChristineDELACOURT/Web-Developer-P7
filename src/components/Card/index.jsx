import { useContext }from "react";
import { ThemeContext } from '../../utils/context';
import PropTypes from 'prop-types';
// Import d une image par défaut
import DefaultPicture from '../../assets/image_mer_desktop.png';
// Import des composants
import { CardWrapper } from '../../css/Card';
import { CardOmbre } from '../../css/Card';
import { CardTitle } from '../../css/Card';
import { CardImage } from '../../css/Card';

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
