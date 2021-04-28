import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Heading from "../components/heading"
import Subheading from "../components/subheading"
import Button from "../components/button"
import Paragraph from "../components/paragraph"
import { device } from "../global/mediaQueries"

const Wrapper = styled.section`
  background-color: ${props => props.theme.lightBackground};
  width: 100vw;
  margin-left: -30px;
  padding: 70px 30px;
  border-radius: 20px;

  @media ${device.mobile} {
    width: 100%;
    margin-left: 0;
    padding: 70px 50px;
  }
  @media ${device.laptop} {
    padding: 85px 75px;
  }
  @media ${device.laptopL} {
    padding: 100px 100px;
  }
  @media ${device.desktopL} {
    padding: 125px 100px;
  }
`

const Container = styled.div`
  text-align: center;
`

const ContactHeading = styled(Heading)`
  margin: 10px 0 20px;
  @media ${device.laptop} {
    margin: 15px 0;
  }
`

const ContactParagraph = styled(Paragraph)`
  margin: 20px auto;
  @media ${device.laptop} {
    margin: 20px auto 30px;
  }
`

const Email = styled.a`
  color: ${props => props.theme.color};
  font-weight: bold;
  text-decoration: none;
  transition: color 0.25s;
  &:hover, &:focus {
    color: ${props => props.theme.secondary};
  }
`

const ContactPrompt = () => {
  return (
    <Wrapper id="contact">
      <Container>
        <Subheading as="h2" centered>CONTACT</Subheading>
        <ContactHeading large>Say Hello.</ContactHeading>
        <ContactParagraph>If you'd like to get in touch, feel free to contact me through 
          <Email href="https://www.linkedin.com/in/kelliepetersen" target="_blank" rel="noreferrer" aria-label="view my LinkedIn page on a new tab"> LinkedIn</Email> or email me at 
          <Email href="mailto:hello@kelliepetersen.com"> hello@kelliepetersen.com</Email>.
        </ContactParagraph>
        <Button as={Link} to="/contact" centered>GET IN TOUCH</Button>
      </Container>
    </Wrapper>
  )
}

export default ContactPrompt;
