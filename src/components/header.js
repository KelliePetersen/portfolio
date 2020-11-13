import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../global/mediaQueries"

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
  @media ${device.mobileL} {
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
`

const Logo = styled(Link)`
  margin: 0;
  text-decoration: none;
  color: ${props => props.theme.color};
  font-size: 3rem;
`

const Menu = styled.button`
  width: 40px;
  height: 26px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
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
    <Logo to="/">K</Logo>
    <Menu>
      <MenuBar top="0" />
      <MenuBar top="50%" center />
      <MenuBar bottom="0" />
    </Menu>
  </Container>
)

export default Header
