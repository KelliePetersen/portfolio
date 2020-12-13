import React from 'react'
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import downloadResume from '../downloads/resume.pdf' 

const NavBar = styled.nav`
  display: none;
  @media ${device.laptop} {
    display: flex;
    justify-content: ${props => props.spaced ? "space-between" : ""};
    width: ${props => props.spaced ? "100%" : "max-content"};
    margin-left: auto;
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

const NavLink = styled.a`
  color: ${props => props.theme.color};
  text-decoration: none;
`

const Nav = ({ spaced }) => {
  return (
    <NavBar spaced={spaced}>
      <NavList>
        <NavListItem style={{margin: "0 60px"}}>
          <ExternalLink href={downloadResume} download>Resume.</ExternalLink>
        </NavListItem>
        <NavListItem>
          <ExternalLink href="https://github.com/KelliePetersen/portfolio" target="_blank" rel="noreferrer">Source Code.</ExternalLink>
          {/* <ExternalLink href="https://www.ewanpetersen.com" target="_blank" rel="noreferrer">My Other Half.</ExternalLink> */}
        </NavListItem>
      </NavList>
      <NavList>
        <NavListItem style={{margin: "0 60px"}}><NavLink href="#projects">My Work.</NavLink></NavListItem>
        <NavListItem><NavLink href="#contact">Say Hello.</NavLink></NavListItem>
      </NavList>
    </NavBar>
  )
}

export default Nav
