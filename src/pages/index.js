import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../sections/hero"
import About from "../sections/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
