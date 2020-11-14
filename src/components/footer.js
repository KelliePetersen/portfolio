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
    grid-template-columns: 1fr 2fr;
    row-gap: 50px;
  }
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

  @media ${device.tablet} {
    text-align: left;
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
    <Nav />
    <SocialMedia />
    <Copyright>© Copyright {new Date().getFullYear()} &bull; Kellie Petersen. <span>All Rights Reserved.</span></Copyright>
    <div style={{margin: "0 0 0 auto" }} ><BackToTop /></div>
  </Wrapper>
)

export default Footer
