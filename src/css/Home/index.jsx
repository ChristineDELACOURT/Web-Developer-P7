import { Link } from "react-router-dom";
import styled from 'styled-components';

export const PageContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
`
export const CardLink = styled(Link)`
  display: block;
  transition: all 0.4s ease-in-out;
  border-radius:10px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.7) 0px 5px 15px;
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