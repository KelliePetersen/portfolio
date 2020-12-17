import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Header from "../components/header"
import Footer from "../components/footer"
import BackToTop from "../components/backToTop"
import Theme from "./theme"
import { device } from "./mediaQueries"
import "./layout.css"

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  font-family: ${props => props.theme.textFont};
`

const Wrapper = styled.div`
  position: relative;
  max-width: 1720px;
  margin: 0 30px;
  padding: 0 0 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.mobile} {
    margin: 0 50px;
  }
  @media ${device.laptop} {
    margin: 0 75px;
  }
  @media ${device.laptopL} {
    margin: 0 100px;
  }
  @media ${device.desktopL} {
    margin: 0 auto;
  }
`

const Layout = ({ children }) => {
  return (
    <Theme>
      <Container>
        <Wrapper>
          <Header />
          <main>{children}</main>
          <BackToTop fixed="true" />
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
