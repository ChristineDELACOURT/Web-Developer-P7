import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
// import { useTheme } from '../../utils/hooks'
import logementList from '../../datas/logementList.json'
import DefaultPicture from '../../assets/image-mer-desktop.png'

const CardWrapper = styled.div`
  height: 340px;
  width: 340px;
  padding: 0px;
  position:relative;
  z-index:2;
  border-radius: 10px;
  background: linear-gradient(transparent, transparent 60%, black);
  &:hover {
    cursor: pointer;
  }
`

const CardTitle = styled.h2`
  width: 170px;
  color:#ffffff;
  padding-left: 10px;
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
  z-index:-1;
`


function Card({ title, cover}) {
  return (
    <CardWrapper>
      <CardImage src={cover} alt="Photo logement" />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}


Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: '',
  cover: DefaultPicture,
}

export default Card
