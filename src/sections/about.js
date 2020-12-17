import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Heading from '../components/heading'
import Subheading from '../components/subheading'
import Paragraph from '../components/paragraph'
import { device } from "../global/mediaQueries"

const Wrapper = styled.section`
  background-color: ${props => props.theme.lightBackground};
  width: 100vw;
  margin-left: -30px;
  padding: 70px 30px;

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
  @media ${device.desktop} {
    width: 100%;
    display: flex;
    justify-content: space-between;
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
    grid-auto-rows: 100px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 580px;
  }
  @media ${device.desktop} {
    margin-left: 50px;
    column-gap: 20px;
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

  @media ${device.tablet} {
    transform: scale(1);
  }

  &:hover ${Tooltip} {
    display: block;
  }
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
          <Subheading>ABOUT ME</Subheading>
          <Heading large>Hi, I'm Kellie.</Heading>
          <Paragraph>I'm a <span>front-end developer</span> and hobbyist designer working at Parchot. 
          I value readable and maintainable code.</Paragraph>
          <Paragraph>My focus is vanilla <span>JavaScript</span> and <span>React</span>, including <span>Gatsby</span> and 
          <span> NextJS</span>. I use Node and Express for the backend. I'm also familiar with WordPress and PHP.</Paragraph>
        </div>
        <Grid>
          {data.allFile.edges.map((file, index) => (
            <GridItem key={`svg-${index}`}>
              <Tooltip>{file.node.name}</Tooltip>
              <img src={`${file.node.publicURL}`} alt={`${file.node.name} icon`} style={{marginBottom: 0}} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default About
