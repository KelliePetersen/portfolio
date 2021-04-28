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
  color: ${props => props.required ? "red" : "white"};
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  transition: bottom 0.3s;
`

const BaseInputStyle = styled.input`
  display: block;
  width: 100%;
  max-width: 450px;
  color: white;
  background-color: transparent;
  outline: none;
  border: none;
`

const ContactInput = styled(BaseInputStyle)`
  border-bottom: 1px solid #bbb;
  margin-bottom: 20px;
  transition: border-color 0.25s;
  
  &:hover {
    border-color: white;
  }
  &:focus {
    border-color: ${props => props.theme.secondary};
  }
`

const ContactTextArea = styled(BaseInputStyle)`
  background-color: #bbb;
  background-image: repeating-linear-gradient(
    to bottom, 
    ${props => props.theme.background}, 
    ${props => props.theme.background} calc(1rem + 3px), 
    rgba(0,0,0,0) calc(1rem + 3px),
    rgba(0,0,0,0) calc(1rem + 4px)
  );
  line-height: 1.45;
  transition: background-color 0.25s;

  @media ${device.laptop} {
    background-image: repeating-linear-gradient(
      to bottom, 
      ${props => props.theme.lightBackground}, 
      ${props => props.theme.lightBackground} calc(1rem + 3px), 
      rgba(0,0,0,0) calc(1rem + 3px),
      rgba(0,0,0,0) calc(1rem + 4px)
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
    <form method="post">
      <ContactLabel htmlFor="name">Name
        <ContactInput type="text" name="name" id="name" required/>
      </ContactLabel>
      <ContactLabel htmlFor="email">Email
        <ContactInput type="email" name="email" id="email" required/>
      </ContactLabel>
      <ContactLabel htmlFor="message">Message
        <ContactTextArea as="textarea" name="message" id="message" rows="5" required></ContactTextArea>
      </ContactLabel>
      <Button as="button" type="submit" margin="40px 0 0 auto">SEND MESSAGE</Button>
    </form>
  </Wrapper>
)

export default ContactForm