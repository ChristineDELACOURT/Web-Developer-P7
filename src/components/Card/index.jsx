import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
// import { useTheme } from '../../utils/hooks'
import logementList from '../../datas/logementList.json'
import DefaultPicture from '../../assets/profile.png'

const CardLabel = styled.span`
  color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`

const CardTitle = styled.span`
  color:'#ffffff';
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`

const CardImage = styled.img`
  height: 340px;
  width: 340px;
  align-self: center;
  border-radius: 5%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  &:hover {
    cursor: pointer;
  }
`
function Card({ title, cover}) {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardImage src={cover} alt="Photo appartement" /> 
    </CardWrapper>
  )
}


Card.propTypes = {
  title: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: '',
  cover: DefaultPicture,
}

export default Card
