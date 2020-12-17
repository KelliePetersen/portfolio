import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import Button from './button'
import downloadResume from '../downloads/resume.pdf' 
import SocialMedia from './socialMedia'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.lightBackground};
  z-index: 10;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s, visibility 0.6s;
  transition-delay: 0.25s;
  
  ${({modal}) => modal && `
  visibility: visible;
  opacity: 1;
  transition-delay: 0s;
  `}
`

const Wrapper = styled.nav`
  display: block;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
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
  font-size: 1.5rem;
  font-weight: bold;
  display: inline-block;
  margin: 10px 0;
  @media ${device.tablet} and (min-height: 750px) {
    font-size: 2.25rem;
    margin: 15px 0;
  }
`

const Email = styled(NavLink)`
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 20px;
  @media ${device.tablet} and (min-height: 750px) {
    font-size: 1.5rem;
  }
`

const Contact = styled(Button)`
  display: none;
  @media ${device.tablet} and (min-height: 750px) {
    display: inline-block;
    margin-top: 80px;
  }
`

const Modal = ({ modalOpen, setModalOpen }) => {
  const [windowOffset, setWindowOffset] = useState(0)
  
  useEffect(() => {
    if (modalOpen && !windowOffset) {
      setWindowOffset(window.scrollY)
      document.body.setAttribute('style', `position: fixed; top: -${window.scrollY}px; width: 100vw;`)
    }
    if (!modalOpen) {
      document.body.setAttribute('style', '')
      if (windowOffset) {
        window.scrollTo(0, windowOffset)
        setWindowOffset(0)
      }
    }
  }, [modalOpen, windowOffset])
  
  return (
  <Container modal={modalOpen}>
    <Wrapper>
      <nav>
        <NavList>
          <li><NavLink white href="#projects" onClick={() => setModalOpen(false)}>My Work.</NavLink></li>
          <li><NavLink white href="#contact" onClick={() => setModalOpen(false)}>Say Hello.</NavLink></li>
          <li><NavLink href={downloadResume} download>Resume.</NavLink></li>
          <li><NavLink href="https://github.com/KelliePetersen/portfolio" target="_blank" rel="noreferrer">Source Code.</NavLink></li>
          <li><Contact href="mailto:hello@kelliepetersen.com">GET IN TOUCH</Contact></li>
          <li><Email white href="mailto:hello@kelliepetersen.com">hello@kelliepetersen.com</Email></li>
        </NavList>
      </nav>
    </Wrapper>
    <SocialMedia modal />
  </Container>
)}

export default Modal
