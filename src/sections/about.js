import React from 'react'
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
  width: 100%;
  max-width: 435px;
  grid-auto-rows: 75px;
  grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
  column-gap: 15px;
  row-gap: 15px;
  margin-top: 60px;
  @media ${device.tablet} {
    grid-auto-rows: 100px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    max-width: 580px;
  }
  @media ${device.desktop} {
    margin-left: 20px;
  }
`

const About = () => {
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
          <div style={{width: "100%", height: "100%", backgroundColor: "#333"}}></div>
          <div style={{width: "100%", height: "100%", backgroundColor: "#333"}}></div>
          <div style={{width: "100%", height: "100%", backgroundColor: "#333"}}></div>
          <div style={{width: "100%", height: "100%", backgroundColor: "#333"}}></div>
          <div style={{width: "100%", height: "100%", backgroundColor: "#333"}}></div>
          <div style={{width: "100%", height: "100%", backgroundColor: "#333"}}></div>
          <div style={{width: "100%", height: "100%", backgroundColor: "#333"}}></div>
          <div style={{width: "100%", height: "100%", backgroundColor: "#333"}}></div>
          <div style={{width: "100%", height: "100%", backgroundColor: "#333"}}></div>
          <div style={{width: "100%", height: "100%", backgroundColor: "#333"}}></div>
          <div style={{width: "100%", height: "100%", backgroundColor: "#333"}}></div>
          <div style={{width: "100%", height: "100%", backgroundColor: "#333"}}></div>
          <div style={{width: "100%", height: "100%", backgroundColor: "#333"}}></div>
          <div style={{width: "100%", height: "100%", backgroundColor: "#333"}}></div>
          <div style={{width: "100%", height: "100%", backgroundColor: "#333"}}></div>
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default About
