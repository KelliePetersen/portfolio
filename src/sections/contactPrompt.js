import React from 'react'
import styled from "styled-components"
import Heading from "../components/heading"
import Subheading from "../components/subheading"
import Button from '../components/button'
import Paragraph from '../components/paragraph'

const Wrapper = styled.section`
  background-color: ${props => props.theme.lightBackground};
  width: 100vw;
  margin-left: -${props => props.theme.horizontalMargin};
  padding: 70px ${props => props.theme.horizontalMargin};
`

const Container = styled.div`
  text-align: center;
`

const Email = styled.a`
  color: ${props => props.theme.color};
  font-weight: bold;
  text-decoration: none;
`

const ContactPrompt = () => {
  return (
    <Wrapper>
      <Container>
        <Subheading weight="400" color="#999">CONTACT</Subheading>
        <Heading style={{margin: "10px 0 20px"}}>Say Hello.</Heading>
        <Paragraph>Let me know your thoughts. 
        Feel free to contact me through social media or email me at 
          <Email href="mailto:hello@kelliepetersen.com"> hello@kelliepetersen.com</Email>.
        </Paragraph>
        <Button to="/contact" light style={{marginTop: '15px'}}>GET IN TOUCH</Button>
      </Container>
    </Wrapper>
  )
}

export default ContactPrompt;
