import React from 'react'
import styled from "styled-components"
import Image from "../components/image"
import Heading from "../components/heading"
import Subheading from "../components/subheading"
import Paragraph from "../components/paragraph"
import Button from '../components/button'
import { device } from "../global/mediaQueries"

const Container = styled.div`
  display: grid;
  row-gap: 20px;
  margin: 0 auto 100px;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    align-items: center;
  }
  @media ${device.desktop} {
    margin: 150px 100px;
    column-gap: 75px;
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
  @media ${device.tablet} {
    height: 40vw;
    max-height: 625px;
  }
`

const TextWrapper = styled.div`
  position: relative;
`

const Summary = styled(Paragraph)`
  max-width: 300px;
  @media ${device.laptop} {
    display: none;
  }
`

const Description = styled(Paragraph)`
  display: none;
  @media ${device.laptop} {
    max-width: 400px;
    display: block;
  }
  @media ${device.laptopL} {
    max-width: 450px;
  }
`

const WebsiteLink = styled(Button)`
  margin-top: 20px;
  @media ${device.mobile} {
    position: absolute;
    top: 0;
    right: 20px;
  }
  @media ${device.tablet} {
    position: relative;
    right: 0;
  }
  @media (max-width: 1280px) {
    padding: 0 30px 0 0;
    border: none;
    margin-top: 0;

    &::before {
      display: none;
    }
  }
`

const ProjectCard = ({ title, role, summary, description, image, link }) => {
  return (
    <Container>
      <ImageWrapper><Image filename={image} alt={title}></Image></ImageWrapper>
      <TextWrapper>
        <Subheading>{role.join(' / ').toUpperCase()}</Subheading>
        <Heading as="h3">{title}</Heading>
        <Summary>{summary}</Summary>
        <Description>{description}</Description>
        <WebsiteLink as="a" href={link} target="_blank">VIEW WEBSITE</WebsiteLink>
      </TextWrapper>
    </Container>
  )
}

export default ProjectCard
