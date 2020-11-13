import React from 'react'
import styled from "styled-components"
import Heading from "../components/heading"
import Subheading from "../components/subheading"
import Paragraph from "../components/paragraph"
import Button from '../components/button'

const Container = styled.div`
  margin-bottom: 100px;
`

const ImageWrapper = styled.div`
  background-color: #333;
  width: 100%;
  height: calc(100vw - 60px);
  margin-bottom: 20px;
`

const ProjectCard = ({ title, role, description, image, link }) => {
  return (
    <Container>
      <ImageWrapper />
      <Subheading>{role}</Subheading>
      <Heading as="h3" style={{margin: '10px 0 15px'}}>{title}</Heading>
      <Paragraph>{description}</Paragraph>
      <Button 
        as="a" href="https://www.google.com" target="_blank"
        style={{padding: "0px 30px 0px 0px", border: "none"}}
      >
      VIEW WEBSITE
      </Button>
    </Container>
  )
}

export default ProjectCard
