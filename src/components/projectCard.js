import React from 'react'
import styled from "styled-components"
import Heading from "../components/heading"
import Subheading from "../components/subheading"
import Paragraph from "../components/paragraph"
import Button from '../components/button'

const Container = styled.div`
  margin-bottom: 50px;
`

const ProjectCard = () => {
  return (
    <Container>
      <Subheading>DESIGN / DEVELOPMENT</Subheading>
      <Heading>Parceley</Heading>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit mattis turpis ut auctor. 
      Quisque nunc enim, blandit vestibulum consequat quis, maximus ac magna. </Paragraph>
      <Button as="a" href="https://www.google.com">MY WORK</Button>
    </Container>
  )
}

export default ProjectCard
