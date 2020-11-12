import React from 'react'
import styled from "styled-components"
import Heading from '../components/heading'
import Subheading from '../components/subheading'
import Paragraph from '../components/paragraph'

const Wrapper = styled.section`
  background-color: ${props => props.theme.lightBackground};
  width: 100vw;
  margin-left: -${props => props.theme.horizontalMargin};
  padding: 70px ${props => props.theme.horizontalMargin};
`

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  // grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  column-gap: 15px;
  row-gap: 15px;
  margin-top: 60px;
`

const About = () => {
  return (
    <Wrapper>
      <Subheading>ABOUT ME</Subheading>
      <Heading>Hi, I'm Kellie.</Heading>
      <Paragraph>I'm a <span>front-end developer</span> and hobbyist designer working at Parchot. 
      I value readable and maintainable code.</Paragraph>
      <Paragraph>My focus is vanilla <span>JavaScript</span> and <span>React</span>, including <span>Gatsby</span> and 
      <span> NextJS</span>. I use Node and Express for the backend. I'm also familiar with WordPress and PHP.</Paragraph>
      <Grid>
        <div style={{width: "100%", height: "75px", backgroundColor: "#333"}}></div>
        <div style={{width: "100%", height: "75px", backgroundColor: "#333"}}></div>
        <div style={{width: "100%", height: "75px", backgroundColor: "#333"}}></div>
        <div style={{width: "100%", height: "75px", backgroundColor: "#333"}}></div>
        <div style={{width: "100%", height: "75px", backgroundColor: "#333"}}></div>
        <div style={{width: "100%", height: "75px", backgroundColor: "#333"}}></div>
        <div style={{width: "100%", height: "75px", backgroundColor: "#333"}}></div>
        <div style={{width: "100%", height: "75px", backgroundColor: "#333"}}></div>
        <div style={{width: "100%", height: "75px", backgroundColor: "#333"}}></div>
        <div style={{width: "100%", height: "75px", backgroundColor: "#333"}}></div>
        <div style={{width: "100%", height: "75px", backgroundColor: "#333"}}></div>
        <div style={{width: "100%", height: "75px", backgroundColor: "#333"}}></div>
        <div style={{width: "100%", height: "75px", backgroundColor: "#333"}}></div>
        <div style={{width: "100%", height: "75px", backgroundColor: "#333"}}></div>
        <div style={{width: "100%", height: "75px", backgroundColor: "#333"}}></div>
      </Grid>
    </Wrapper>
  )
}

export default About
