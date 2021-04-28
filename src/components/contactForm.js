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
    <form method="post">
      <label htmlFor="name">Name
        <input type="text" name="name" id="name" required/>
      </label>
      <label htmlFor="email">Email
        <input type="email" name="email" id="email" required/>
      </label>
      <label htmlFor="message">Message
        <textarea name="message" id="message" rows="5" required></textarea>
      </label>
      <Button as="button" type="submit">SEND MESSAGE</Button>
    </form>
  </Wrapper>
)

export default ContactForm