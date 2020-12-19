import React from 'react'
import styled from "styled-components"
import { device } from "../global/mediaQueries"
// import downloadResume from '../downloads/resume.pdf' 

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

const NavLink = styled.a`
  color: ${props => props.white ? props.theme.color : "#b3b3b3"};
  text-decoration: none;
  transition: color 0.25s;
  &:hover, &:focus {
    color: ${props => props.theme.secondary};
  }
`

const Nav = ({ spaced }) => {
  return (
    <NavBar spaced={spaced}>
      <NavList>
        <li style={{margin: "0 60px"}}>
          {/* <NavLink href={downloadResume} download>Resume.</NavLink>
        </li>
        <li style={{margin: 0}}> */}
          <NavLink href="https://github.com/KelliePetersen/portfolio" target="_blank" rel="noreferrer">Source Code.</NavLink>
          {/* <NavLink href="https://www.ewanpetersen.com" target="_blank" rel="noreferrer">My Other Half.</NavLink> */}
        </li>
      </NavList>
      <NavList>
        <li style={{margin: "0 60px"}}><NavLink white href="#projects">My Work.</NavLink></li>
        <li style={{margin: 0}}><NavLink white href="#contact">Say Hello.</NavLink></li>
      </NavList>
    </NavBar>
  )
}

export default Nav
