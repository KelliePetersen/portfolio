import React from 'react'
import styled from "styled-components"
import ProjectCard from '../components/projectCard'

const Wrapper = styled.div`
  width: 100%;
  margin: 70px 0;
`

const Projects = () => {
  return (
    <Wrapper>
      <ProjectCard
        title="Parceley"
        role="DESIGN / DEVELOPMENT"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit mattis turpis ut auctor. 
        Quisque nunc enim, blandit vestibulum consequat quis, maximus ac magna."
        image=""
        link=""
      />
      <ProjectCard
        title="Awaken Beauty"
        role="DESIGN / DEVELOPMENT"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit mattis turpis ut auctor. 
        Quisque nunc enim, blandit vestibulum consequat quis, maximus ac magna."
        image=""
        link=""
      />
      <ProjectCard
        title="Rapha Walk"
        role="DESIGN / DEVELOPMENT"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit mattis turpis ut auctor. 
        Quisque nunc enim, blandit vestibulum consequat quis, maximus ac magna."
        image=""
        link=""
      />
    </Wrapper>
  )
}

export default Projects;
