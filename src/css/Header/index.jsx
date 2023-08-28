import styled from 'styled-components';
// Imports des liens pour la navigation 
import { Link } from 'react-router-dom';

export const HomeLogo = styled.img` 
`

export const LinkContainer = styled.div` 
`

export const NavContainer = styled.nav`
  padding: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledLink = styled(Link)`
  line-height: 34px;
  padding: 10px 15px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`