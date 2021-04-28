import React from "react"
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import Button from "../components/button"

const Wrapper = styled.div`
  @media ${device.laptop} {
    background-color: ${props => props.theme.lightBackground};
    padding: 50px;
    border-radius: 20px;
  }
`

const ContactForm = () => (
  <Wrapper>
    hi what up boo
    <Button>SEND MESSAGE</Button>
  </Wrapper>
)

export default ContactForm