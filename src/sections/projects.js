import React from "react"
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import ProjectCard from "../components/projectCard"

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
    summary: "Parceley is a meal delivery app that provides vegan and cruelty-free meal options from approved restaurants.",
    description: `Parceley is a meal delivery app that provides vegan and cruelty-free meal options from approved restaurants.
    It was built using Gatsby, React, and SASS and is currently hosted on Netlify.`,
    image: "parceley.jpg",
    link: "https://parceley.netlify.app/",
    github: "https://github.com/KelliePetersen/parceley"
  },
  {
    id: 2,
    title: "Awakening Beauty",
    role: ["Design", "Development"],
    summary: "A premier hair salon located in North Georgia, USA. Multi-page website listing services and information.",
    description: `Awakening Beauty is a premier hair salon located in North Georgia, USA. 
    In this project, I designed and developed a multi-page website highlighting their services and 
    listing all important information about their salon.`,
    image: "awaken.jpg",
    link: "https://kelliepetersen.github.io/awakeningbeauty/",
    github: "https://github.com/KelliePetersen/awakeningbeauty"
  },
  {
    id: 3,
    title: "Rapha Walk",
    role: ["Design", "Development"],
    summary: "Rapha Walk raises funds for a non-profit medical centre. This website allowed people to purchase tickets and donate to Rapha Clinic.",
    description: `Each year, the Rapha Walk raises funds for Rapha Clinic, a non-profit medical centre helping families across Georgia, USA.
    I designed and developed a website that allowed people to purchase tickets and donate to Rapha Clinic.`,
    image: "raphawalk.jpg",
    link: "https://kelliepetersen.github.io/rapha-walk/",
    github: "https://github.com/KelliePetersen/rapha-walk"
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
