import styled from 'styled-components';
// import des paramètres
import colors from '../../utils/style/colors';

export const Container = styled.div`
width:100%;
display: flex;
flex-direction:column;
justify-content: flex-start;
flex-wrap: wrap;
`
// Container contenant les 2 collapses
export const TitreDescriptionEquipementsContainer = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:no-wrap;
border-radius:10px;
height:52px;
background-color:${colors.primary};
`
export const Titre = styled.h2`
color: ${colors.secondary};
padding:13px 20px;
`
export const Chevron = styled.p`
padding:10px 20px;
`
export const ContenuContainer = styled.div`
background-color:${colors.five};
position:relative;
top:-10px;
z-index:-1;
`
export const Contenu = styled.p`
padding:20px;
font-weight:400;
`