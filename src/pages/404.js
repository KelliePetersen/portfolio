import React from "react"
import { Link } from "gatsby"
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

const NotFoundPage = () => (
  <Layout>
    <SEO title="Oops! Page does not exist" />
    <Container>
      <Heading>Page does not exist</Heading>
      <Paragraph>Uh oh! The page you searched for does not exist.</Paragraph>
      <Button as={Link} to="/" centered="true">Go Home</Button>
    </Container>
  </Layout>
)

export default NotFoundPage
