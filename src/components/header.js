import React, { useState } from "react"
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import Nav from "./nav"
import Logo from "./logo"
import Modal from "./modal"
import MenuButton from "./menuButton"

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
    top: 0;
    padding: 20px 75px;
    background-color: ${props => props.theme.background};
  }
  @media ${device.laptopL} {
    padding: 20px 100px;
  }
  @media ${device.desktop} {
    max-width: 1920px;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Container>
        <Logo setModalOpen={setModalOpen}  />
        <Nav spaced />
        <MenuButton modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </Container>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  )
}

export default Header
