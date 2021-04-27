import React from "react"
import styled from "styled-components"
import Layout from "../global/layout"
import SEO from "../global/seo"
import Heading from "../components/heading"
import Paragraph from "../components/paragraph"
import Button from "../components/button"

const Container = styled.div`
  margin: 20vh auto 0;
  width: max-content;
  max-width: 80vw;
  text-align: center;
`

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Container>
      <Heading>Let's talk.</Heading>
      <Paragraph>You can email me directly at hello@kelliepetersen.com.
      I'm currently available for freelance work, and I will be available for full-time positions starting June.</Paragraph>
      <Button centered="true">SEND MESSAGE</Button>
    </Container>
  </Layout>
)

export default ContactPage
