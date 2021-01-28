import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import LogoSVG from "../images/logo.svg"

const LogoLink = styled(Link)`
  margin: 0;
  width: 50px;
  height: 50px;
  display: block;
  background-image: url(${LogoSVG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 95%;
  position: relative;

  &:before {
    content: "";
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
  }
`

const Logo = ({ setModalOpen }) => (
  <LogoLink to="/" aria-label="Logo home page" onClick={() => setModalOpen(false)}></LogoLink>
)

export default Logo