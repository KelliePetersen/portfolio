import React, { useState, useEffect } from "react"
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
    background-color: ${props => props.bgColor ? props.theme.background : "rgba(0,0,0,0)"};
    // transition: background-color 0.5s;
  }
  @media ${device.laptopL} {
    padding: 15px 50px;
  }
  @media ${device.desktopL} {
    padding: 15px 90px;
  }
  @media ${device.widescreen} {
    padding: 20px calc((100vw - 2000px)/2);
  }
`

const Header = () => {
  const [navStyle, setNavStyle] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    let windowState = () => (window.scrollY > 25) ? setNavStyle(true) : setNavStyle(false)
    document.addEventListener("scroll", windowState)
    return () => document.removeEventListener("scroll", windowState)
  }, [])

  return (
    <>
      <Container bgColor={navStyle}>
        <Logo to="/" aria-label="Logo home page" onClick={() => setModalOpen(false)} />
        <Nav spaced />
        <MenuButton modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </Container>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  )
}

export default Header
