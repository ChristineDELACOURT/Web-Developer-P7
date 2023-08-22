import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DefaultPicture from '../../assets/image_mer_desktop.png'

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
  top:-160px;
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

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

Banner.defaultProps = {
  title: '',
  cover: DefaultPicture,
}

export default Banner
