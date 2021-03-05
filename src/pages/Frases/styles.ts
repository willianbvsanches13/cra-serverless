import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  
`;

export const FraseContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(NavLink)`
  background: blue;
  color: white;
  padding: 10px 15px;
  border: none;
  text-decoration: none;
  margin-left: 10px;
`;