import React from 'react'
import styled from "styled-components"
import Image from "../components/image"
import Heading from "../components/heading"
import Subheading from "../components/subheading"
import { Button } from '../components/button'
import { device } from "../global/mediaQueries"
import SocialMedia from '../components/socialMedia'
import img from '../images/stars.svg';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 500px;
  
  @media ${device.tablet} {
    max-height: 100vw;
  }
  @media ${device.mobile} {
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: left center;
  }
  @media ${device.desktop} {
    background-repeat: repeat;
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
    width: 40vw;
    max-width: 570px;
  }
  @media ${device.laptop} {
    top: 50%;
  }
  @media ${device.desktop} {
    right: 100px;
  }
  @media ${device.desktopL} {
    right: 200px;
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
    max-width: 550px;
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
  font-size: 2.25rem;
  margin: 20px 0 40px;
  @media ${device.tablet} {
    font-size: 3rem;
  }
  @media ${device.desktop} {
    margin: 20px 0 50px;
    font-size: 3.5rem;
  }
  @media ${device.desktopL} {
    font-size: 4rem;
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
      <ImageWrapper><Image filename="planets" alt="Simplistic drawing of 2 planets and 2 moons in grayscale"></Image></ImageWrapper>
      <Container>
        <Subheading normal>HI, I'M KELLIE PETERSEN</Subheading>
        <HeadingContainer>
          <PageHeading as="h1">Frontend react &amp; javascript developer.</PageHeading>
          <Button href="#projects">MY WORK</Button>
        </HeadingContainer>
      </Container>
      <SocialContainer><SocialMedia /></SocialContainer>
    </Wrapper>
  )
}

export default Hero;
