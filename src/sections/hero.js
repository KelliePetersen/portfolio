import React from 'react'
import styled from "styled-components"
import Heading from "../components/heading"
import Subheading from "../components/subheading"
import Button from '../components/button'
import { device } from "../global/mediaQueries"
import SocialMedia from '../components/socialMedia'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 500px;
`

const Container = styled.div`
  position: absolute;
  bottom: 75px;
  left: 0px;
  @media ${device.tablet} {
    bottom: 20vh;
  }
`

const HeadingContainer = styled.div`
  max-width: 450px;
  @media ${device.laptop} {
    margin-left: 50px;
    max-width: 550px;
  }
  @media ${device.desktop} {
    margin-left: 70px;
    max-width: 700px;
  }
`

const PageHeading = styled(Heading)`
  font-size: 2.25rem;
  margin: 30px 0 40px;
  @media ${device.laptop} {
    font-size: 3rem;
  }
  @media ${device.desktop} {
    font-size: 4rem;
    margin: 20px 0 35px;
  }
`

const SocialContainer = styled.div`
  display: none;
  @media ${device.laptop} {
    display: block;
    position: absolute;
    bottom: 50px;
    right: 0;
  }
`

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Subheading normal>JAVASCRIPT DEVELOPER</Subheading>
        <HeadingContainer>
          <PageHeading as="h1">Bask in my total shocking tagline you.</PageHeading>
          <Button to="#projects" primary>MY WORK</Button>
        </HeadingContainer>
      </Container>
      <SocialContainer><SocialMedia /></SocialContainer>
    </Wrapper>
  )
}

export default Hero;
