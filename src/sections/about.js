import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Heading from "../components/heading"
import Subheading from "../components/subheading"
import Paragraph from "../components/paragraph"
import { device } from "../global/mediaQueries"

const Wrapper = styled.section`
  background-color: ${props => props.theme.lightBackground};
  width: 100vw;
  margin-left: -30px;
  padding: 70px 30px;
  border-radius: 20px;

  @media ${device.mobile} {
    width: 100%;
    margin-left: 0;
    padding: 70px 50px;
  }
  @media ${device.laptop} {
    padding: 75px;
  }
  @media ${device.laptopL} {
    padding: 100px;
  }
  @media ${device.desktopL} {
    padding: 150px 200px;
  }
`

const Container = styled.div`
  width: max-content;
  max-width: 100%;
  margin: 0 auto;
  @media ${device.laptopL} {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
  }
  @media ${device.desktopL} {
    max-width: 1400px;
  }
`

const Grid = styled.div`
  display: grid;
  margin-left: -20px;
  width: calc(100% + 20px);
  grid-auto-rows: 75px;
  grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
  column-gap: 15px;
  row-gap: 15px;
  margin-top: 60px;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 520px;
  }
  @media ${device.laptopL} {
    margin-left: 50px;
    width: 450px;
  }
  @media ${device.desktopL} {
    column-gap: 20px;
    width: 580px;
    grid-auto-rows: 100px;
  }
`

const Tooltip = styled.div`
  display: none;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  padding: 10px 15px;
  border-radius: 10px;
  width: max-content;
`

const GridItem = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: scale(0.8);

  @media ${device.desktopL} {
    transform: scale(1);
  }

  &:hover ${Tooltip} {
    display: block;
  }
`

const GridImage = styled.img`
  marginBottom: 0;
  width: 100%;
  height: 100%;
`

const About = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: {relativeDirectory: {eq: "skills"}}) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Container>
        <div>
          <Subheading as="h2">ABOUT ME</Subheading>
          <Heading large>Hi, I'm Kellie.</Heading>
          <Paragraph>I'm a self taught developer with 3 years experience in developing and launching websites. 
          My core values are making functional, accessible products with easy-to-read code.</Paragraph>
          <Paragraph>My focus is vanilla <span>JavaScript</span> and <span>React</span>, including <span>Gatsby</span> and 
          <span> NextJS</span>. I style websites with a variety of libraries, such as <span>SASS</span> and <span>Styled Components</span>. 
          I use Express and MongoDB for the backend. I'm familiar with WordPress 
          and Strapi, and displaying data with D3.</Paragraph>
        </div>
        <Grid>
          {data.allFile.edges.map(file => (
            <GridItem key={file.node.name}>
              <Tooltip>{file.node.name}</Tooltip>
              <GridImage src={`${file.node.publicURL}`} alt={`${file.node.name} icon`} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default About
