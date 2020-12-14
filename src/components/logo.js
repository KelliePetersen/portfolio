import React from 'react'
import styled from "styled-components"

const LogoLink = styled.a`
  margin: 0;
  text-decoration: none;
  color: ${props => props.theme.color};
  font-size: 3rem;
  font-weight: bold;
  font-family: ${props => props.theme.headingFont};
`

const Logo = ({ setModalOpen }) => (
  <LogoLink href="#" onClick={() => setModalOpen(false)}>K</LogoLink>
)

export default Logo;