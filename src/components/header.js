import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


const Container = styled.header`
  position: fixed;
  top: ${props => props.theme.verticalMargin};
  left: 0;
  padding: 0 ${props => props.theme.horizontalMargin};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  margin: 0;
  text-decoration: none;
  color: ${props => props.theme.text};
  font-size: 3rem;
  font-weight: bold;
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
  background-color: ${props => props.theme.text};
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
