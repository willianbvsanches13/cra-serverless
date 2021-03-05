import React, { useCallback } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const activeClassName = 'active'

export const StyledLink = styled(NavLink)`
  background: blue;
  color: white;
  padding: 10px 15px;
  border: none;
  text-decoration: none;
  margin-left: 10px;
`;

const ListItem = styled.li`
  display: inline-block;
  padding: 5px 10px;
`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Wrapper = styled.div`
  padding-top: 15px;
`

export const Navigation = () => {
  const location = useLocation()

  const isDetailsActive = useCallback(() => {
    return location.pathname.indexOf('frases/') > -1
  }, [location.pathname])

  return (
    <Wrapper>
      <List>
        <ListItem>
          <StyledLink to={`${process.env.PUBLIC_URL || ''}/nova`} activeClassName={activeClassName} exact>
            Cadastrar Frase
          </StyledLink>
        </ListItem>

        <ListItem>
          <StyledLink
            to={`${process.env.PUBLIC_URL || ''}/frases`}
            activeClassName={activeClassName}
            isActive={isDetailsActive}
          >
            Listar Frases
          </StyledLink>
        </ListItem>
      </List>
    </Wrapper>
  )
}
