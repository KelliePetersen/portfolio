import React from 'react'
import styled from "styled-components"
import Heading from "../components/heading"
import Subheading from "../components/subheading"
import Button from '../components/button'
import { device } from "../global/mediaQueries"

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
`

const PageHeading = styled(Heading)`
  font-size: 2.25rem;
  margin: 30px 0 40px;
  @media ${device.laptop} {
    font-size: 3rem;
  }
  @media ${device.desktop} {
    font-size: 4rem;
  }
`

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Subheading weight="400" color="#999">JAVASCRIPT DEVELOPER</Subheading>
        <PageHeading as="h1">Bask in my total shocking tagline you.</PageHeading>
        <Button to="#projects" primary>MY WORK</Button>
      </Container>
    </Wrapper>
  )
}

export default Hero;
