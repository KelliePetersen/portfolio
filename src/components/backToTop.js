import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import { device } from "../global/mediaQueries"

const Arrow = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-top: 3px solid ${props => props.theme.grey};
  border-left: 3px solid ${props => props.theme.grey};
  transform: rotate(45deg);
  transition: transform 0.25s;
`

const TopButton = styled.a`
  position: ${props => props.fixed ? "fixed" : ""};
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

  &:hover ${Arrow}, &:focus ${Arrow} {
    border-color: ${props => props.theme.tertiary};
    border-image: ${props => props.theme.gradient};
    border-image-slice: 1;
    transform: rotate(45deg) scale(1.1);
  }
  
  ${({visibility, fixed}) => visibility && `
    display: ${fixed ? "block" : "none"};
  `}
`

const BackToTop = ({ fixed, style }) => {
  const [visibility, setVisibility] = useState(false)

  useEffect(() => {
    let windowState = () => (window.scrollY > 500) ? setVisibility(true) : setVisibility(false)
    windowState();
    document.addEventListener('scroll', windowState)
  }, [])

  return (
    <TopButton fixed={fixed} visibility={visibility ? 1 : 0} style={style} href="#" aria-label="back to top of page">
      <Arrow />
    </TopButton>
  )
}
export default BackToTop
