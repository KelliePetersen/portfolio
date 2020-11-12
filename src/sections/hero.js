import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import Heading from "../components/heading"
import Subheading from "../components/subheading"
import Button from '../components/button'

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

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Subheading weight="400" color="#999">JAVASCRIPT DEVELOPER</Subheading>
        <Heading large>Bask in my total shocking tagline you.</Heading>
        <Button to="#projects" primary>MY WORK</Button>
      </Container>
    </Wrapper>
  )
}

export default Hero;
