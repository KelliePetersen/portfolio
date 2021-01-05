import React from 'react'
import styled from "styled-components"
import LogoSVG from '../images/logo.svg'

const LogoLink = styled.a`
  margin: 0;
  width: 55px;
  height: 55px;
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50px;
  position: relative;
`

const Background = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background-color: ${props => props.theme.background};
  border-radius: 50%;
  z-index: -1;
`

const Logo = ({ setModalOpen }) => (
  <LogoLink href="#" style={{backgroundImage: `url(${LogoSVG})`}} aria-label="Logo home page" onClick={() => setModalOpen(false)}>
    <Background />
  </LogoLink>
)

export default Logo