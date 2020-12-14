import React from 'react'
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import downloadResume from '../downloads/resume.pdf' 

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.lightBackground};
  z-index: 10;
`

const Wrapper = styled.nav`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
`

const NavLink = styled.a`
  color: ${props => props.white ? props.theme.color : "#b3b3b3"};
  text-decoration: none;
`

const Modal = ({ modalOpen, setModalOpen }) => {
  if (!modalOpen) return null

  return (
    <Container>
      <Wrapper>
        <nav>
          <NavList>
            <li><NavLink white href="#projects">My Work.</NavLink></li>
            <li><NavLink white href="#contact">Say Hello.</NavLink></li>
            <li><NavLink href={downloadResume} download>Resume.</NavLink></li>
            <li><NavLink href="https://github.com/KelliePetersen/portfolio" target="_blank" rel="noreferrer">Source Code.</NavLink></li>
            <li><NavLink white href="mailto:hello@kelliepetersen.com" style={{fontSize: "1.125rem", fontWeight: "bold"}}>
              hello@kelliepetersen.com
            </NavLink></li>
          </NavList>
        </nav>
      </Wrapper>
    </Container>
  )
}

export default Modal
