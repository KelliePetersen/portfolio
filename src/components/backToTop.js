import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { device } from "../global/mediaQueries"

const Arrow = styled.span`
  display: block;
  position: relative;
  width: 30px;
  height: 30px;
  border-top: 3px solid ${props => props.theme.grey};
  border-left: 3px solid ${props => props.theme.grey};
  transform: rotate(45deg);
`

const TopButton = styled.a`
  position: ${props => props.fixed ? "fixed" : ""};
  margin: ${props => props.fixed ? "0" : "0 0 0 auto"};
  display: none;
  bottom: 15px;
  right: 35px;
  z-index: 20;

  @media ${device.mobile} {
    right: 55px;
  }
  @media ${device.tablet} {
    display: ${props => props.fixed ? "none" : "block"};
  }

  &:focus ${Arrow}, 
  &:focus-visible ${Arrow}, 
  &:hover ${Arrow}, 
  &:hover:focus:not(:focus-visible) ${Arrow} 
  {
    border-color: ${props => props.theme.tertiary};
    border-image: ${props => props.theme.gradient};
    border-image-slice: 1;
  }

  &:focus:not(:focus-visible) ${Arrow} {
    border-color: ${props => props.theme.grey};
    border-image: linear-gradient(${props => props.theme.grey}, ${props => props.theme.grey});
    border-image-slice: 1;
  }
  
  ${({visibility, fixed}) => visibility && `
    display: ${fixed ? "block" : "none"};
  `}
`

const BackToTop = ({ fixed }) => {
  const [visibility, setVisibility] = useState(false)

  useEffect(() => {
    let windowState = () => (window.scrollY > 500) ? setVisibility(true) : setVisibility(false)
    document.addEventListener("scroll", windowState)
    return () => document.removeEventListener("scroll", windowState)
  }, [])

  return (
    <TopButton fixed={fixed} visibility={visibility ? 1 : 0} href="#" aria-label="back to top of page">
      <Arrow />
    </TopButton>
  )
}
export default BackToTop
