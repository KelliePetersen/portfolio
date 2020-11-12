import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"

const theme = {
  main: "mediumseagreen",
  background: "#1a1a1a",
  text: "white"
};

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
`

const Wrapper = styled.div`
  max-width: 1720px;
  margin: 0 30px;
  padding: 20px 0;
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
    <ThemeProvider theme={theme}>
      <Container>
        <Wrapper>
          <Header />
          <main>{children}</main>
          <Footer siteTitle={data.site.siteMetadata?.title || `Kellie Petersen`} />
        </Wrapper>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
