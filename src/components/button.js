import React from 'react'
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import ArrowIcon from '../images/arrow.svg'

const Arrow = styled.span`
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px;
  background-image: url(${ArrowIcon});
  margin-left: 10px;
  opacity: 0;
  transition: opacity 0.25s;
`

const ButtonStyle = styled.a`
  display: flex;
  align-items: center;
  width: max-content;
  position: relative;
  color: white;
  text-decoration: none;
  // border: 3px solid ${props => props.theme.tertiary};
  // border-image: ${props => props.theme.gradient};
  // border-image-slice: 1;
  background-color: ${props => props.theme.tertiary};
  background-image: ${props => props.theme.gradient};
  background-size: 200%;
  background-position: right;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1.75px;
  padding: 22.5px 50px 22.5px 50px;
  transition: background 0s, padding 0.25s;

  @media ${device.tablet} {
    font-size: 1.125rem;
  }

  ${({modal}) => modal && `
    display: none;
    @media ${device.tablet} and (min-height: 750px) {
      display: inline-block;
      margin-top: 80px;
    }
  `}

  &:hover, &:focus {
    padding: 22.5px 70px 22.5px 30px;
    transition: background 0.75s, padding 0.25s;
    background-size: 300%;
    background-position: left;
    background-image: linear-gradient(to right, 
      ${props => props.theme.secondary}, 
      ${props => props.theme.tertiary} 30%,
      ${props => props.theme.secondary} 50%,
      ${props => props.theme.secondary}
    )
  }

  &:hover ${Arrow}, &:focus ${Arrow} {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s;
  }
`

const Button = ({ children, href, modal, style }) => (
  <ButtonStyle type="button" href={href} modal={modal} style={style}>
    {children}<Arrow />
  </ButtonStyle>
)

export default Button;
