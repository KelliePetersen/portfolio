import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import Footer from "../components/footer"
import Header from "../components/header"
import "./layout.css"

const theme = {
  background: "#1a1a1a",
  lightBackground: "#1f1f1f",
  color: "white",
  grey: "#ccc",
  primary: "#85e7af",
  secondary: "#3aa390",
  tertiary: "#06747b",
  gradient: "linear-gradient(to right, #85e7af, #06747b)",
  horizontalMargin: "30px",
  verticalMargin: "20px",
  headingFont: "Manrope",
  textFont: "Lato"
};

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  font-family: ${props => props.theme.textFont};
`

const Wrapper = styled.div`
  max-width: 1720px;
  margin: 0 ${props => props.theme.horizontalMargin};
  padding: 0 0 ${props => props.theme.verticalMargin};
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Wrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </Wrapper>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
