import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../global/layout"
import Seo from "../global/seo"
import Heading from "../components/heading"
import Paragraph from "../components/paragraph"
import Button from "../components/button"

const Container = styled.div`
  margin: 20vh auto 0;
  width: max-content;
  max-width: 80vw;
  text-align: center;
`

const InlineLink = styled.a`
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: color 0.25s;
  &:hover {
    color: ${props => props.theme.secondary};
  }
`

const ThanksPage = () => (
  <Layout>
    <Seo title="Thank you" />
    <Container>
      <Heading as="h1">Thanks!</Heading>
      <Paragraph>
        I'll get back to you within 24 hours. In the meantime, feel free to browse my website, learn more about me on
        <InlineLink href="https://www.linkedin.com/in/kelliepetersen" target="_blank" rel="noreferrer"> LinkedIn </InlineLink> 
        or check out my work on
        <InlineLink href="https://www.github.com/kelliepetersen" target="_blank" rel="noreferrer"> GitHub</InlineLink>.
      </Paragraph>
      <Button as={Link} to="/" centered="true">GO HOME</Button>
    </Container>
  </Layout>
)

export default ThanksPage
