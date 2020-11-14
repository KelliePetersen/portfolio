import React from 'react'
import styled from "styled-components"
import Heading from "../components/heading"
import Subheading from "../components/subheading"
import Button from '../components/button'
import Paragraph from '../components/paragraph'
import { device } from "../global/mediaQueries"

const Wrapper = styled.section`
  background-color: ${props => props.theme.lightBackground};
  width: 100vw;
  margin-left: -30px;
  padding: 70px 30px;

  @media ${device.mobile} {
    width: 100%;
    margin-left: 0;
    padding: 70px 50px;
  }
  @media ${device.laptop} {
    padding: 100px 75px;
  }
  @media ${device.laptopL} {
    padding: 125px 100px;
  }
`

const Container = styled.div`
  text-align: center;
`

const HeadingContainer = styled.div`
  margin: 10px 0 20px;
  @media ${device.laptop} {
    margin: 20px 0;
  }
`

const Email = styled.a`
  color: ${props => props.theme.color};
  font-weight: bold;
  text-decoration: none;
`

const ContactPrompt = () => {
  return (
    <Wrapper id="contact">
      <Container>
        <Subheading style={{margin: "0 auto"}}>CONTACT</Subheading>
        <HeadingContainer><Heading large style={{margin: "0"}}>Say Hello.</Heading></HeadingContainer>
        <Paragraph style={{margin: "20px auto"}}>Let me know your thoughts. 
        Feel free to contact me through social media or email me at 
          <Email href="mailto:hello@kelliepetersen.com"> hello@kelliepetersen.com</Email>.
        </Paragraph>
        <Button as="a" href="mailto:hello@kelliepetersen.com" light style={{marginTop: '15px'}}>GET IN TOUCH</Button>
      </Container>
    </Wrapper>
  )
}

export default ContactPrompt;
