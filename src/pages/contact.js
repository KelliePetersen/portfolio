import React from "react"
import styled from "styled-components"
import Layout from "../global/layout"
import SEO from "../global/seo"
import { device } from "../global/mediaQueries"
import Heading from "../components/heading"
import Paragraph from "../components/paragraph"
import StarBackground from "../components/starBackground"
import SocialMedia from "../components/socialMedia"
import ContactForm from "../components/contactForm"

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  
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

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  max-width: 80vw;
  display: grid;
  row-gap: 40px;
  margin-top: 100px;
  @media ${device.laptop} {
    margin-top: 0;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
  }
`

const InfoWrapper = styled.div`
  text-align: center;
  @media ${device.tablet} {
    text-align: left;
  }
`

const PageHeading = styled(Heading)`
  font-size: 2rem;
  margin-bottom: 0;
  @media ${device.desktop} {
    font-size: 3rem;
  }
  @media ${device.desktopL} {
    font-size: 4rem;
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

const ContactParagraph = styled(Paragraph)`
  margin: 25px 0 35px;
  max-width: 475px;
`

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Wrapper>
      <StarBackground />
      <Container>
        <InfoWrapper>
          <PageHeading as="h1">Let's talk.</PageHeading>
          <ContactParagraph>You can email me directly at <Email href="mailto:hello@kelliepetersen.com"> hello@kelliepetersen.com</Email>.
          Feel free to message me about anything. I'm currently available for freelance work and full-time positions.</ContactParagraph>
          <SocialMedia noMargin />
        </InfoWrapper>
        <ContactForm />
      </Container>
    </Wrapper>
  </Layout>
)

export default ContactPage
