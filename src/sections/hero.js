import React from "react"
import styled from "styled-components"
import Image from "../components/image"
import Heading from "../components/heading"
import Subheading from "../components/subheading"
import Button from "../components/button"
import { device } from "../global/mediaQueries"
import SocialMedia from "../components/socialMedia"
import img from "../images/stars100.svg";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 500px;
  
  @media ${device.tablet} {
    max-height: 100vw;
  }
  @media ${device.laptopL} {
    max-height: 800px;
  }
  @media ${device.desktopL} {
    max-height: 1100px;
  }
  @media ${device.widescreen} {
    max-height: 1500px;
  }
`

const StarBackground = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.5;
  background-size: cover;
  @media ${device.desktopL} {
    background-position: center;
    background-size: initial;
  }
`

const ImageWrapper = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
    position: absolute;
    right: 30px;
    top: 40%;
    transform: translateY(-50%);
    width: 42vw;
    max-width: 500px;
    padding: 10px;
  }
  @media ${device.laptop} {
    top: 50%;
  }
  @media ${device.laptopL} {
    right: 100px;
  }
  @media ${device.desktop} {
    right: 150px;
  }
  @media ${device.desktopL} {
    right: 200px;
    max-width: 600px;
  }
  
`

const Container = styled.div`
  position: absolute;
  bottom: 20%;
  left: 0px;
`

const HeadingContainer = styled.div`
  max-width: 450px;
  @media ${device.tablet} {
    max-width: 525px;
  }
  @media ${device.laptop} {
    margin-left: 50px;
  }
  @media ${device.desktop} {
    margin-left: 70px;
    max-width: 600px;
  }
  @media ${device.desktopL} {
    max-width: 700px;
  }
`

const PageHeading = styled(Heading)`
  font-size: 1.75rem;
  margin: 20px 0 30px;
  @media ${device.tablet} {
    font-size: 2rem;
  }
  @media ${device.desktop} {
    margin: 20px 0 30px;
    font-size: 2.375rem;
  }
  @media ${device.desktopL} {
    font-size: 3rem;
  }
`

const SocialContainer = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
    position: absolute;
    bottom: 50px;
    right: 0;
  }
`

const Hero = () => {
  return (
    <Wrapper id="home">
      <StarBackground />
      <ImageWrapper><Image filename="hero" traced="true" loading="eager" alt="Simplistic drawing of 2 planets and 2 moons in grayscale"></Image></ImageWrapper>
      <Container>
        <Subheading as="h1" normal>KELLIE PETERSEN &bull; BRISBANE</Subheading>
        <HeadingContainer>
          <PageHeading>I build stellar websites and lightspeed apps using JavaScript &amp; React.</PageHeading>
          <Button href="#projects">SEE MY WORK</Button>
        </HeadingContainer>
      </Container>
      <SocialContainer><SocialMedia /></SocialContainer>
    </Wrapper>
  )
}

export default Hero;
