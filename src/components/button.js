import React from "react"
import styled from "styled-components"
import { device } from "../global/mediaQueries"

const ButtonStyle = styled.a`
  display: flex;
  align-items: center;
  width: max-content;
  position: relative;
  color: ${props => props.theme.color};
  text-decoration: none;
  background-color: ${props => props.theme.color};
  border-radius: 50px;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
  font-family: ${props => props.theme.headingFont};
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1.5px;
  padding: 17.5px 27.5px 17.5px 27.5px;
  transition: color 0.25s, background-image 0.25s;
  overflow: hidden;
  z-index: 5;

  @media ${device.laptopL} {
    padding: 17.5px 30px 17.5px 30px;
  }
  @media ${device.desktopL} {
    font-size: 1.125rem;
    padding: 22.5px 45px 22.5px 45px;
  }
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.secondary};
    background-image: ${props => props.theme.gradient};
    transition: opacity 0.25s;
    z-index: -1;
  }

  &:hover, &:focus {
    color: ${props => props.theme.background};
  }
  &:hover:before {
    opacity: 0;
  }

  ${({modal}) => modal && `
    display: none;
    @media ${device.tablet} and (min-height: 750px) {
      display: inline-block;
      margin-top: 50px;
    }
  `}

  ${({centered}) => centered && `
    margin: 25px auto 0;
  `}

  ${({small, theme}) => small && `
    font-size: 0.75rem;
    padding: 15px 25px 15px 25px;

    @media ${device.tablet} {
      font-size: 0.75rem;
      padding: 20px 35px 20px 35px;
    }
    @media ${device.laptop} {
      padding: 20px 40px 20px 40px;
    }
    @media ${device.desktopL} {
      font-size: 1rem;
    }

    &:after {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      right: 3px;
      bottom: 3px;
      background-color: ${theme.background};
      border-radius: 50px;
      z-index: -1;
    }

    &:hover, &:focus {
      color: ${theme.color};
    }
  `}
`

const Button = ({ children, href, small, modal, centered, style, target, rel }) => (
  <ButtonStyle href={href} small={small} modal={modal} centered={centered} style={style} target={target} rel={rel}>
    {children}
  </ButtonStyle>
)

export default Button;
