import React from "react"
import styled from "styled-components"
import Image from "./image"
import Heading from "./heading"
import Subheading from "./subheading"
import Paragraph from "./paragraph"
import Button from "./button"
import {SimpleLink} from "./simpleLink"
import { device } from "../global/mediaQueries"

const Container = styled.div`
  display: grid;
  row-gap: 20px;
  margin: 0 auto 100px;
  @media ${device.mobile} {
    grid-template-columns: 1fr 2fr;
    column-gap: 30px;
    align-items: center;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
  }
  @media ${device.laptopL} {
    column-gap: 75px;
  }
  @media ${device.desktop} {
    margin: 125px;
    column-gap: 90px;
  }
  @media ${device.desktopL} {
    margin: 150px;
    column-gap: 120px;
  }
`

const ImageWrapper = styled.div`
  background-color: #1a1a1a;
  width: 100%;
  height: calc(100vw - 60px);
  max-height: 300px;
  opacity: 0.75;
  border-radius: 20px;
  overflow: hidden;
  @media ${device.tablet} {
    height: 40vw;
    max-height: 425px;
  }
  @media ${device.laptop} {
    max-width: 500px;
    margin: 0 0 0 auto;
  }
  @media ${device.desktop} {
    max-height: 500px;
  }
  @media ${device.desktopL} {
    max-height: 625px;
    max-width: 700px;
  }
`

const TextWrapper = styled.div`
  position: relative;
`

const Summary = styled(Paragraph)`
  max-width: 400px;
  @media ${device.tablet} {
    max-width: 350px;
  }
  @media ${device.laptop} {
    display: none;
  }
`

const Description = styled(Paragraph)`
  display: none;
  margin-bottom: 40px;
  @media ${device.laptop} {
    max-width: 400px;
    display: block;
    margin-bottom: 30px;
  }
  @media ${device.desktopL} {
    max-width: 450px;
    margin-bottom: 40px;
  }
`

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: max-content;
  column-gap: 15px;
  @media ${device.tablet} {
    column-gap: 25px;
  }
`

const ProjectCard = ({ title, role, summary, description, image, link, github }) => {
  return (
    <Container>
      <ImageWrapper><Image filename={image} alt={title}></Image></ImageWrapper>
      <TextWrapper>
        <Subheading>{role.join(" / ").toUpperCase()}</Subheading>
        <Heading as="h3">{title}</Heading>
        <Summary>{summary}</Summary>
        <Description>{description}</Description>
        <ButtonGrid>
          <Button href={link} small="true" target="_blank" rel="noreferrer" aria-label={`view the ${title} website on a new tab`}>VIEW SITE</Button>
          <SimpleLink href={github} small="true" target="_blank" rel="noreferrer" label={`view ${title} source code on Github`}>VIEW CODE</SimpleLink>
        </ButtonGrid>
      </TextWrapper>
    </Container>
  )
}

export default ProjectCard
