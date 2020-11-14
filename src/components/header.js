import React from "react"
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import Nav from "./nav"
import Logo from "./logo"

const Container = styled.header`
  position: fixed;
  z-index: 20;
  top: 10px;
  left: 0;
  padding: 0 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${props => props.theme.headingFont};
  @media ${device.mobile} {
    top: 20px;
    padding: 0 50px;
  }
  @media ${device.laptop} {
    top: 30px;
    padding: 0 75px;
  }
  @media ${device.laptopL} {
    padding: 0 100px;
  }
  @media ${device.desktop} {
    max-width: 1920px;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Menu = styled.button`
  width: 40px;
  height: 26px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  @media ${device.laptop} {
    display: none;
  }
`

const MenuBar = styled.div`
  position: absolute;
  right: 0;
  top: ${props => props.top || "auto"};
  bottom: ${props => props.bottom || "auto"};
  transform: ${props => props.center ? "translateY(-50%)" : ""};
  width: 100%;
  height: 3px;
  background-color: ${props => props.theme.color};
`

const Header = () => (  
  <Container>
    <Logo />
    <Nav spaced />
    <Menu>
      <MenuBar top="0" />
      <MenuBar top="50%" center />
      <MenuBar bottom="0" />
    </Menu>
  </Container>
)

export default Header
