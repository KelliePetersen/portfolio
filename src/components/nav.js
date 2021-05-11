import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import Resume from "../../static/kellie_petersen_resume.pdf" 

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
  font-size: 0.8125rem;
  @media ${device.desktopL} {
    font-size: 1rem;
  }
`

const NavListItem = styled.li`
  margin: ${props => props.noMargin ? "5px 0" : "5px 60px"};
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
        <NavListItem>
          <NavLink href={Resume} target="_blank" rel="noopener noreferrer" aria-label="download my resume pdf" download>Resume. [PDF]</NavLink>
        </NavListItem>
        <NavListItem noMargin>
          <NavLink href="https://github.com/KelliePetersen/portfolio" target="_blank" rel="noreferrer" aria-label="view the source code of my Portfolio on Github.com">Source Code.</NavLink>
        </NavListItem>
        {/* <NavListItem>
          <NavLink href="https://www.ewanpetersen.com" target="_blank" rel="noreferrer" aria-label="visit my husband's website on a new tab">My Other Half.</NavLink>
        </NavListItem> */}
      </NavList>
      <NavList>
        <NavListItem><NavLink white href="#projects">My Work.</NavLink></NavListItem>
        <NavListItem noMargin><NavLink as={Link} white="true" to="/contact">Say Hello.</NavLink></NavListItem>
      </NavList>
    </NavBar>
  )
}

export default Nav
