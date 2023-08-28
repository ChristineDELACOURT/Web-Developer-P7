import React , { useContext } from "react";
import { ThemeContext } from '../../utils/context';
import PropTypes from 'prop-types';
// Import des composants
import { BannerWrapper } from '../../css/Banner';
import { BannerTitle } from '../../css/Banner';
import { BannerImage } from '../../css/Banner';
// Import d une image par défaut
import DefaultPicture from '../../assets/image_mer_desktop.png';

function Banner({ title, cover}) {
  var mobile = useContext(ThemeContext);
  return (
    <BannerWrapper style={{height:(mobile.mobile ? '111px' : '223px')}}>
      <BannerImage src={cover}
        style={{ height:(mobile.mobile ? '111px' : '223px'),
        borderRadius:(mobile.mobile ? '10px' : '30px')}} 
        alt="Photo paysage" /> 
      <BannerTitle style={{width:(mobile.mobile ? '220px' : '100%'),
        fontSize:(mobile.mobile ? '24px' : '48px'),
        lineHeight:(mobile.mobile ? '24px' : '68.45px'),
        top:(mobile.mobile ? '-85px' : '-162px'),
        textAlign:(mobile.mobile ? 'left' : 'center'),
        marginLeft:(mobile.mobile ? '16px' : '0px')}}>{title}</BannerTitle>
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
