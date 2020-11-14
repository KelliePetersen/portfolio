import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"

const LogoLink = styled(Link)`
  margin: 0;
  text-decoration: none;
  color: ${props => props.theme.color};
  font-size: 3rem;
  font-weight: bold;
  font-family: ${props => props.theme.headingFont};
`

const Logo = () => (
  <LogoLink to="#">K</LogoLink>
)

export default Logo;