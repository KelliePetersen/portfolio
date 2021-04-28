import React from "react"
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import Button from "../components/button"

const Wrapper = styled.div`
  max-width: 550px;
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
  color: ${props => props.required ? "red" : "white"};
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  transition: bottom 0.3s;
`

const BaseInputStyle = styled.input`
  display: block;
  width: 100%;
  color: white;
  background-color: transparent;
  outline: none;
  border: none;
`

const ContactInput = styled(BaseInputStyle)`
  border-bottom: 1px solid #777;
  margin-bottom: 40px;
  transition: border-color 0.25s;
  
  &:hover {
    border-color: white;
  }
  &:focus {
    border-color: ${props => props.theme.secondary};
  }
`

const ContactTextArea = styled(BaseInputStyle)`
  background-color: #777;
  background-image: repeating-linear-gradient(
    to bottom, 
    ${props => props.theme.background}, 
    ${props => props.theme.background} calc(1rem + 4px), 
    rgba(0,0,0,0) calc(1rem + 4px),
    rgba(0,0,0,0) calc(1rem + 5px)
  );
  line-height: 1.5;
  transition: background-color 0.25s;

  @media ${device.laptop} {
    background-image: repeating-linear-gradient(
      to bottom, 
      ${props => props.theme.lightBackground}, 
      ${props => props.theme.lightBackground} calc(1rem + 4px), 
      rgba(0,0,0,0) calc(1rem + 4px),
      rgba(0,0,0,0) calc(1rem + 5px)
    );
  }
  
  &:hover {
    background-color: white;
  }
  &:focus {
    background-color: ${props => props.theme.secondary};
  }
`

const ContactForm = () => (
  <Wrapper>
    <form method="POST" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
      <ContactLabel htmlFor="person">Name
        <ContactInput type="text" name="person" id="person" required/>
      </ContactLabel>
      <ContactLabel htmlFor="email">Email
        <ContactInput type="email" name="email" id="email" required/>
      </ContactLabel>
      <ContactLabel htmlFor="message">Message
        <ContactTextArea as="textarea" name="message" id="message" rows="4" required></ContactTextArea>
      </ContactLabel>
      <input type="hidden" name="form-name" value="contact" />
      <Button as="button" type="submit" tiny margin="40px 0 0 auto">SEND MESSAGE</Button>
    </form>
  </Wrapper>
)

export default ContactForm