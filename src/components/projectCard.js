import React from 'react'
import styled from "styled-components"
import Heading from "../components/heading"
import Subheading from "../components/subheading"
import Paragraph from "../components/paragraph"
import Button from '../components/button'
import { device } from "../global/mediaQueries"

const Container = styled.div`
  margin-bottom: 100px;
`

const ImageWrapper = styled.div`
  background-color: #333;
  width: 100%;
  height: calc(100vw - 60px);
  margin-bottom: 20px;
`

const Summary = styled(Paragraph)`
  @media ${device.laptop} {
    display: none;
  }
`

const Description = styled(Paragraph)`
  display: none;
  @media ${device.laptop} {
    display: block;
  }
`

const ProjectCard = ({ title, role, summary, description, image, link }) => {
  return (
    <Container>
      <ImageWrapper>{image}</ImageWrapper>
      <Subheading>{role}</Subheading>
      <Heading as="h3">{title}</Heading>
      <Summary>{summary}</Summary>
      <Description>{description}</Description>
      <Button 
        as="a" href={link} target="_blank"
        style={{padding: "0px 30px 0px 0px", border: "none"}}
      >
      VIEW WEBSITE
      </Button>
    </Container>
  )
}

export default ProjectCard
