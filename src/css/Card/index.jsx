import styled from 'styled-components';
// import des paramètres
import colors from '../../utils/style/colors';

export const CardWrapper = styled.div`
  position:relative;
`
// On met un léger voile noir pour augmenter le contraste avec le texte
export const CardOmbre = styled.div`
  height:60px;
  border-radius: 10px;
  background: linear-gradient(to bottom, transparent 0%,hsla(0,0%,0%,.8) 100%);
  position:absolute;
  bottom:0px;
  z-index:1;
`

export const CardTitle = styled.h2`
  width: 200px;
  color:${colors.secondary};
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  align-self: left;
  text-decoration:none;
  position:absolute;
  bottom:0px;
`

export const CardImage = styled.img`
  border-radius: 10px;
  object-fit: cover;
  align-self: center;
  position:absolute;
  z-index:1;
`