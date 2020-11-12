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
      <ProjectCard />
    </Wrapper>
  )
}

export default Projects;
