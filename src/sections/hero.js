import React from 'react'
import styled from "styled-components"
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
    max-width: 700px;
  }
`

const PageHeading = styled(Heading)`
  font-size: 2.25rem;
  margin: 30px 0 40px;
  @media ${device.tablet} {
    font-size: 3rem;
  }
  @media ${device.desktop} {
    font-size: 4rem;
    margin: 20px 0 35px;
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
      <Container>
        <Subheading normal>JAVASCRIPT DEVELOPER</Subheading>
        <HeadingContainer>
          <PageHeading as="h1">Bask in my total shocking tagline you.</PageHeading>
          <Button href="#projects">MY WORK</Button>
        </HeadingContainer>
      </Container>
      <SocialContainer><SocialMedia /></SocialContainer>
    </Wrapper>
  )
}

export default Hero;
