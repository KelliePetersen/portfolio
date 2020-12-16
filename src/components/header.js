import React, { useState } from "react"
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import Nav from "./nav"
import Logo from "./logo"
import Modal from "./modal"

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

  ${({cross}) => cross && `
    background: rgba(0,0,0,0);
  `}
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
  box-shadow: 0.5px 0.5px 1px black;
  transition: all 0.25s;

  ${({crossLeft}) => crossLeft && `
    top: 10px;
    transform: rotate(-45deg);
  `}

  ${({crossRight}) => crossRight && `
    top: 10px;
    transform: rotate(45deg);
  `}

  ${({crossCenter}) => crossCenter && `
    opacity: 0;
  `}
`

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleModal = () => modalOpen ? setModalOpen(false) : setModalOpen(true)

  return (
    <>
      <Container>
        <Logo setModalOpen={setModalOpen}  />
        <Nav spaced />
        <Menu type="button" aria-label="open menu" onClick={handleModal} cross={modalOpen}>
          <MenuBar top="0" crossLeft={modalOpen} />
          <MenuBar top="50%" center crossCenter={modalOpen} />
          <MenuBar bottom="0" crossRight={modalOpen} />
        </Menu>
      </Container>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  )
}

export default Header
