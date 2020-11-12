import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../sections/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage
