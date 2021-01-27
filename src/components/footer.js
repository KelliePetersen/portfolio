import React from "react"
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import BackToTop from "./backToTop"
import Logo from "./logo"
import Nav from "./nav"
import SocialMedia from "./socialMedia"

const Wrapper = styled.footer`
  margin-top: 50px;
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 50px;
    align-items: center;
  }
  @media ${device.laptop} {
    grid-template-columns: 25% 25% auto;
    row-gap: 50px;
  }
`

const LogoFooter = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`

const NavWrapper = styled.div`
  display: none;
  @media ${device.laptop} {
    grid-column-start: span 2; 
    display: block;
  }
`

const Social = styled.div`
  @media ${device.laptop} {
    grid-column-start: span 3; 
    margin-bottom: 10px;
  }
`

const Copyright = styled.p`
  font-size: 0.75rem;
  color: #b3b3b3;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 1.35;
  
  @media ${device.tablet} {
    text-align: left;
  }
  @media ${device.laptop} {
    grid-column-start: span 2;
  }

  & > span {
    display: block;
    @media ${device.tablet} {
      display: inline-block;
    }
  }
`

const Footer = () => (
  <Wrapper>
    <LogoFooter><Logo /></LogoFooter>
    <NavWrapper><Nav /></NavWrapper>
    <Social><SocialMedia /></Social>
    <Copyright>© Copyright {new Date().getFullYear()} &bull; Kellie Petersen. <span>All Rights Reserved.</span></Copyright>
    <BackToTop style={{ margin: "0 0 0 auto" }}/>
  </Wrapper>
)

export default Footer
