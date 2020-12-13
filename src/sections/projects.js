import React from 'react'
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import ProjectCard from '../components/projectCard'

const Wrapper = styled.div`
  width: 100%;
  padding: 70px 0 0;
  @media ${device.tablet} {
    padding: 120px 0 20px;
  }
  @media ${device.desktop} {
    padding: 1px 0 0;
  }
`

const projectsData = [
  {
    id: 1,
    title: "Parceley",
    role: ["Design", "Development"],
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit mattis turpis ut auctor.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit mattis turpis ut auctor. Quisque nunc enim, blandit vestibulum consequat quis, maximus ac magna.",
    image: "parceley.jpg",
    link: "https://lucid-kalam-c6958e.netlify.app/"
  },
  {
    id: 2,
    title: "Awaken Beauty",
    role: ["Design", "Development"],
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit mattis turpis ut auctor.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit mattis turpis ut auctor. Quisque nunc enim, blandit vestibulum consequat quis, maximus ac magna.",
    image: "awaken.jpg",
    link: "https://kelliepetersen.github.io/awakeningbeauty/"
  },
  {
    id: 3,
    title: "Rapha Walk",
    role: ["Design", "Development"],
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit mattis turpis ut auctor.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit mattis turpis ut auctor. Quisque nunc enim, blandit vestibulum consequat quis, maximus ac magna.",
    image: "raphawalk.jpg",
    link: "https://kelliepetersen.github.io/rapha-walk/"
  }
]

const Projects = () => {
  return (
    <Wrapper id="projects">
      {projectsData.map(project => <ProjectCard key={project.id} {...project} />)}
    </Wrapper>
  )
}

export default Projects;
