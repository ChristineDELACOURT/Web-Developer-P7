import styled from 'styled-components';
// Import des paramètres
import colors from '../../utils/style/colors';

export const AlbumContainer = styled.div`
  width:100%;
  height:415px;
  display: flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  flex-wrap: nowrap;
  background-size: cover;
  background-position: center;
  border-radius: 25px;
`
export const PhotoContainer = styled.div`
  width:100%;
  height:415px;
  display: flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap: wrap;
  border-radius: 25px;
`
export const ChevronLeft = styled.p`
  margin-left: 20px;
`
export const ChevronRight = styled.p`
  margin-right: 20px;
`
export const Compteur = styled.p`
  width:100%;
  position:relative;
  top:-18px;
  color:${colors.secondary};
  font-size:18px;
  line-height:25.67px;
  text-align:center;
`