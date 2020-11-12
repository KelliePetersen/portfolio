import React from 'react'
import styled from "styled-components"
import Heading from "../components/heading"
import Subheading from "../components/subheading"
import Button from '../components/button'

const Wrapper = styled.section`
  background-color: ${props => props.theme.lightBackground};
  width: 100vw;
  margin-left: -${props => props.theme.horizontalMargin};
  padding: 70px ${props => props.theme.horizontalMargin};
`

const Container = styled.div`
  text-align: center;
`

const ContactPrompt = () => {
  return (
    <Wrapper>
      <Container>
        <Subheading weight="400" color="#999">JAVASCRIPT DEVELOPER</Subheading>
        <Heading large as="h1">Bask in my total shocking tagline you.</Heading>
        <Button to="/contact" primary>GET IN TOUCH</Button>
      </Container>
    </Wrapper>
  )
}

export default ContactPrompt;
