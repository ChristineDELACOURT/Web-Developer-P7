import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const TagContainer = styled.div`
  width:100%;
  gap:10px;
  display:flex;
  flex-direction:flex-start;
`

export const TagStyle = styled.h3`
  min-width:115px;
  height:22px;
  font-size: 14px;
  line-height:19.96px;
  border-radius:10px;
  background-color:${colors.primary};
  color: ${colors.secondary};
  text-align:center;
  padding:3px 5px 0px 5px;
`