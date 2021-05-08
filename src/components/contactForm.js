import React, { useState } from "react"
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

const Form = styled.form`
  position: relative;
`

const ContactLabel = styled.label`
  display: block;
  position: relative;
  bottom: -15px;
  color: white;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  transition: bottom 0.3s, color 0.3s;

  &:focus-within {
    color: ${props => props.theme.primary};
  }
`

const BaseInputStyle = styled.input`
  display: block;
  width: 100%;
  color: white;
  background-color: transparent;
  outline: none;
  border: none;
  // &:required {
  //   box-shadow: none;
  //   outline: none;
  // }
`

const ContactInput = styled(BaseInputStyle)`
  border-bottom: 1px solid #777;
  margin-bottom: 40px;
  transition: border-color 0.25s;
  
  &:hover {
    border-color: white;
  }
  &:focus, &:focus-visible {
    border-color: ${props => props.theme.primary};
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
  &:focus, &:focus-visible {
    background-color: ${props => props.theme.primary};
  }
`

const Popup = styled.p`
  display: block;
  visibility: ${props => props.visible ? "visible" : "hidden"};
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: bold;
  color: ${props => props.theme.primary};
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.25s;
`

const ContactForm = () => {
  const [values, setValues] = useState({
    person: '',
    email: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = e => {
    setValues({ 
      ...values, 
      [e.target.name]: e.target.value 
    })
    setFormSubmitted(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <Wrapper>
      <Form method="POST" name="contact" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
        <ContactLabel htmlFor="person">Name
          <ContactInput 
            type="text" 
            name="person" 
            id="person" 
            required 
            value={values.person}
            onChange={handleChange}
          />
        </ContactLabel>
        <ContactLabel htmlFor="email">Email
          <ContactInput 
            type="email" 
            name="email" 
            id="email" 
            required 
            value={values.email}
            onChange={handleChange}
          />
        </ContactLabel>
        <ContactLabel htmlFor="message">Message
          <ContactTextArea 
            as="textarea" 
            name="message" 
            id="message" 
            rows="4" 
            required 
            value={values.message}
            onChange={handleChange}
          />
        </ContactLabel>
        <input type="hidden" name="form-name" value="contact" />
        <Popup visible={formSubmitted}>Message sent!</Popup>
        <Button as="button" type="submit" tiny margin="50px 0 0 auto">SEND MESSAGE</Button>
      </Form>
    </Wrapper>
  )
}

export default ContactForm