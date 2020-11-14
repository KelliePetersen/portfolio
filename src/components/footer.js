import React from "react"
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import BackToTop from "./backToTop"
import Logo from "./logo"
import Nav from "./nav"
import SocialMedia from "./socialMedia"

const Wrapper = styled.footer`
  margin-top: 50px;
`

const LogoFooter = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`

const Copyright = styled.p`
  font-size: 0.75rem;
  color: #b3b3b3;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 1.35;

  & > span {
    display: block;
  }
`

const Footer = () => (
  <Wrapper>
    <LogoFooter><Logo /></LogoFooter>
    <Nav />
    <SocialMedia />
    <Copyright>© Copyright {new Date().getFullYear()} &bull; Kellie Petersen. <span>All Rights Reserved.</span></Copyright>
    <BackToTop />
  </Wrapper>
)

export default Footer
