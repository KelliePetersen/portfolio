import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Footer from "./footer"
import Header from "./header"
import "./layout.css"

const Wrapper = styled.div`
  margin: 20px 30px;
  max-width: 1720px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
      <Footer siteTitle={data.site.siteMetadata?.title || `Kellie Petersen`} />
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
