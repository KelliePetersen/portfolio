import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../global/layout"
import SEO from "../global/seo"
import Heading from "../components/heading"
import Paragraph from "../components/paragraph"
import { ButtonStyle, Arrow } from "../components/button"

const Container = styled.div`
  margin: 200px auto 0;
  width: max-content;
  text-align: center;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="Oops! Page does not exist" />
    <Container>
      <Heading>Page not found</Heading>
      <Paragraph>Uh oh! You may have searched for a page that doesn't exist, or I messed something up. Hopefully this is your fault.</Paragraph>
      <ButtonStyle as={Link} to="/" style={{margin: '30px auto 0'}}>
        Go Home<Arrow />
      </ButtonStyle>
    </Container>
  </Layout>
)

export default NotFoundPage
