import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import { device } from "../global/mediaQueries"

const TopButton = styled.a`
  position: ${props => props.fixed ? "fixed" : ""};
  display: none;
  bottom: 15px;
  right: 35px;
  z-index: 20;
  @media ${device.mobile} {
    right: 55px;
  }

  ${({visibility, fixed}) => visibility && `
    display: ${fixed ? "block" : "none"};
    @media ${device.tablet} {
      display: ${fixed ? "none" : "block"};
    }
  `}
`

const Arrow = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-top: 3px solid ${props => props.theme.grey};
  border-left: 3px solid ${props => props.theme.grey};
  transform: rotate(45deg);
`

const BackToTop = ({ fixed }) => {
  const [visibility, setVisibility] = useState(false)

  useEffect(() => {
    let windowState = () => (window.scrollY > 500) ? setVisibility(true) : setVisibility(false)
    windowState();
    document.addEventListener('scroll', windowState)
  }, [])

  return (
    <TopButton fixed={fixed} visibility={visibility} href="#" aria-label="back to top of page">
      <Arrow />
    </TopButton>
  )
}
export default BackToTop
