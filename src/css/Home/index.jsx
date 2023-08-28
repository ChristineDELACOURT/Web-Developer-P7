import { Link } from "react-router-dom";
import styled from 'styled-components';

export const PageContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
`
export const CardLink = styled(Link)`
  display: block;
  &:hover {
    cursor: pointer;
  }
`
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius:10px;
  padding: 44px;
  justify-content:space-around;
  align-content:space-around;
  gap: 50px;
`