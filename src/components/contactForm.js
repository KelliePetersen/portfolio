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

const ContactLabel = styled.label`
  display: block;
  position: relative;
  bottom: -15px;
  color: ${props => props.required ? "red" : "#ccc"};
  font-size: 0.875em;
  letter-spacing: 0.5px;
  transition: bottom 0.3s;
`

const ContactInput = styled.input`
  display: block;
  width: 100%;
  max-width: 450px;
  color: white;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;

  &:hover {
    border-color: white;
  }
  &:focus {
    border-color: ${props => props.theme.secondary};
  }
`

const ContactForm = () => (
  <Wrapper>
    <form method="post">
      <ContactLabel htmlFor="name">Name
        <ContactInput type="text" name="name" id="name" required/>
      </ContactLabel>
      <ContactLabel htmlFor="email">Email
        <ContactInput type="email" name="email" id="email" required/>
      </ContactLabel>
      <ContactLabel htmlFor="message">Message
        <textarea name="message" id="message" rows="5" required></textarea>
      </ContactLabel>
      <Button as="button" type="submit">SEND MESSAGE</Button>
    </form>
  </Wrapper>
)

export default ContactForm