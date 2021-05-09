import React from "react"
import Seo from "../global/seo"
import Layout from "../global/layout"
import Hero from "../sections/hero"
import About from "../sections/about"
import Projects from "../sections/projects"
import ContactPrompt from "../sections/contactPrompt"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" googleSiteVerification="gNTqSTRkyZl-vvQlcXbfM-FuHnLilb4lFK50-vUBpFA" />
    <Hero />
    <About />
    <Projects />
    <ContactPrompt />
  </Layout>
)

export default IndexPage
