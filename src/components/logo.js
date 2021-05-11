import { Link } from "gatsby"
import styled from "styled-components"
import LogoSVG from "../images/logo.svg"

const Logo = styled(Link)`
  display: block;
  position: relative;
  margin: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.theme.background};
  background-image: ${props => props.theme.gradient};

  &:before, &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
  }

  &:before {
    background-color: white;
    z-index: 3;
    transition: opacity 0.25s;
  }

  &:after {
    background-image: url(${LogoSVG});
    background-repeat: no-repeat;
    background-position: center;
    z-index: 5;
  }

  &:focus:before, 
  &:focus-visible:before, 
  &:hover:before, 
  &:hover:focus:not(:focus-visible):before 
  {
    opacity: 0;
  }

  &:focus:not(:focus-visible):before {
    opacity: 1;
  }
`

export default Logo