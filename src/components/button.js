import React from 'react'
import styled from "styled-components"
import { device } from "../global/mediaQueries"

const Arrow = styled.span`
  width: 12px;
  height: 12px;
  border: 4px solid ${props => props.theme.background};
  border-left: 0px;
  border-bottom: 0px;
  border-radius: 3px;
  transform: rotate(45deg);
  margin-left: 15px;
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
  color: ${props => props.theme.background};
  text-decoration: none;
  background-color: ${props => props.theme.color};
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
  font-family: ${props => props.theme.headingFont};
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1.5px;
  padding: 17.5px 22.5px 17.5px 25px;
  transition: background 0.25s;

  @media ${device.tablet} {
    font-size: 1.125rem;
    padding: 22.5px 30px 22.5px 40px;
  }

  ${({modal}) => modal && `
    display: none;
    @media ${device.tablet} and (min-height: 750px) {
      display: inline-block;
      margin-top: 80px;
    }
  `}

  &:hover, &:focus {
    background-color: ${props => props.theme.secondary};
  }
`

const Button = ({ children, href, modal, style }) => (
  <ButtonStyle href={href} modal={modal} style={style}>
    {children}<Arrow />
  </ButtonStyle>
)

export { Button, ButtonStyle, Arrow };
