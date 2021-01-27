import React from "react"
import styled from "styled-components"
import { device } from "../global/mediaQueries"

const Arrow = styled.span`
  position: absolute;
  top: 50%;
  left: 42%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 12px;
  height: 12px;
  border: 3.75px solid ${props => props.theme.background};
  border-left: 0px;
  border-bottom: 0px;
  border-radius: 3px;
  transition: border-color 0.25s;
  z-index: 3;
  @media ${device.desktopL} {
    width: 14px;
    height: 14px;
    border-width: 4px;
  }
`

const Background = styled.span`
  display: block;
  position: relative;
  width: 30px;
  height: 30px;
  background-color: ${props => props.theme.color};
  margin-left: 10px;
  border-radius: 50%;
  @media ${device.desktopL} {
    width: 40px;
    height: 40px;
    margin-left: 15px;
  }
`

const ButtonStyle = styled.a`
  display: flex;
  align-items: center;
  width: max-content;
  position: relative;
  color: ${props => props.theme.color};
  text-decoration: none;
  font-family: ${props => props.theme.headingFont};
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1.5px;

  @media ${device.tablet} {
    font-size: 1.125rem;
  }

  &:hover, &:focus {
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.primary};
    background-image: ${props => props.theme.gradient};
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }
  &:hover ${Background}, &:focus ${Background} {
    background-color: ${props => props.theme.primary};
    background-image: ${props => props.theme.gradient};
  }

  ${({small}) => small && `
    font-size: 0.75rem;

    @media ${device.tablet} {
      font-size: 0.75rem;
    }
    @media ${device.desktopL} {
      font-size: 1rem;
    }
  `}
`

const SimpleLink = ({ children, href, small, style, target, rel }) => (
  <ButtonStyle href={href} small={small} style={style} target={target} rel={rel}>
    {children}
    <Background><Arrow /></Background>
  </ButtonStyle>
)

export { SimpleLink, ButtonStyle, Background, Arrow };
