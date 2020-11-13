import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Footer from "../components/footer"
import Header from "../components/header"
import Theme from "./theme"
import "./layout.css"

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
    <Theme>
      <Container>
        <Wrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </Wrapper>
      </Container>
    </Theme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
