import React from "react"
import styled from "styled-components"
import { device } from "../global/mediaQueries"

const Arrow = styled.span`
  width: 12px;
  height: 12px;
  border: 4px solid ${props => props.theme.color};
  border-left: 0px;
  border-bottom: 0px;
  border-radius: 3px;
  transform: rotate(45deg);
  margin-left: 15px;
  transition: border-color 0.25s;
  z-index: 3;
  @media ${device.tablet} {
    width: 14px;
    height: 14px;
    margin-left: 20px;
  }
`

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
  padding: 17.5px 22.5px 17.5px 25px;
  transition: color 0.25s, background-image 0.25s;
  overflow: hidden;

  @media ${device.tablet} {
    font-size: 1.125rem;
    padding: 22.5px 30px 22.5px 40px;
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
  }

  &:hover, &:focus {
    color: ${props => props.theme.background};
  }
  &:hover ${Arrow}, &:focus ${Arrow} {
    border-color: ${props => props.theme.background};
  }
  &:hover:before {
    opacity: 0;
  }

  ${({modal}) => modal && `
    display: none;
    @media ${device.tablet} and (min-height: 750px) {
      display: inline-block;
      margin-top: 80px;
    }
  `}

  ${({small, theme}) => small && `
    font-size: 0.875rem;
    padding: 15px 20px 15px 22.5px;

    @media ${device.tablet} {
      font-size: 1rem;
      padding: 20px 25px 20px 30px;
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
    }

    &:hover, &:focus {
      color: ${theme.color};
    }
    &:hover ${Arrow}, &:focus ${Arrow} {
      border-color: ${theme.color};
    }
  `}
`

const Button = ({ children, href, small, modal, style, target, rel }) => (
  <ButtonStyle href={href} small={small} modal={modal} style={style} target={target} rel={rel}>
    <span style={{zIndex: "3"}}>{children}</span><Arrow />
  </ButtonStyle>
)

export { Button, ButtonStyle, Arrow };
