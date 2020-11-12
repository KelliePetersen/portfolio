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
`

const Menu = styled.button`
  width: 40px;
  height: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
`

const MenuBar = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 3px;
  background-color: ${props => props.theme.text};
`

const Header = () => (  
  <Container>
    <Logo to="/">K</Logo>
    <Menu>
      <MenuBar />
    </Menu>
  </Container>
)

export default Header
