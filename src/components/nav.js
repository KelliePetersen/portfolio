import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../global/mediaQueries"

const NavBar = styled.nav`
  display: none;
  @media ${device.laptop} {
    display: flex;
    justify-content: ${props => props.spaced ? "space-between" : ""};
    width: 100%;
  }
`

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`

const NavListItem = styled.li`
  margin: 0;
`

const ExternalLink = styled.a`
  color: #b3b3b3;
  text-decoration: none;
`

const NavLink = styled(Link)`
  color: ${props => props.theme.color};
  text-decoration: none;
`

const Nav = ({ spaced }) => {
  return (
    <NavBar spaced={spaced}>
      <NavList>
        <NavListItem style={{margin: "0 60px"}}>
          <ExternalLink href="https://www.ewanpetersen.com" target="_blank" rel="noreferrer">Resume.</ExternalLink>
        </NavListItem>
        <NavListItem>
          <ExternalLink href="https://www.ewanpetersen.com" target="_blank" rel="noreferrer">My Other Half.</ExternalLink>
        </NavListItem>
      </NavList>
      <NavList>
        <NavListItem style={{margin: "0 60px"}}><NavLink to="#projects">My Work.</NavLink></NavListItem>
        <NavListItem><NavLink to="/contact">Say Hello.</NavLink></NavListItem>
      </NavList>
    </NavBar>
  )
}

export default Nav
