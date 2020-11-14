import React from 'react'
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import ProjectCard from '../components/projectCard'

const Wrapper = styled.div`
  width: 100%;
  margin: 70px 0 0;
  padding: 1px 0;
  @media ${device.tablet} {
    margin: 120px 0 20px;
  }
  @media ${device.desktop} {
    margin: 0;
  }
`

const Projects = () => {
  return (
    <Wrapper id="projects">
      <ProjectCard
        title="Parceley"
        role="DESIGN / DEVELOPMENT"
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit mattis turpis ut auctor." 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit mattis turpis ut auctor. 
        Quisque nunc enim, blandit vestibulum consequat quis, maximus ac magna."
        image=""
        link="https://lucid-kalam-c6958e.netlify.app/"
      />
      <ProjectCard
        title="Awaken Beauty"
        role="DESIGN / DEVELOPMENT"
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit mattis turpis ut auctor." 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit mattis turpis ut auctor. 
        Quisque nunc enim, blandit vestibulum consequat quis, maximus ac magna."
        image=""
        link="https://kelliepetersen.github.io/awakeningbeauty/"
      />
      <ProjectCard
        title="Rapha Walk"
        role="DESIGN / DEVELOPMENT"
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit mattis turpis ut auctor." 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit mattis turpis ut auctor. 
        Quisque nunc enim, blandit vestibulum consequat quis, maximus ac magna."
        image=""
        link="https://kelliepetersen.github.io/rapha-walk/"
      />
    </Wrapper>
  )
}

export default Projects;
