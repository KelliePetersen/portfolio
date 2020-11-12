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

const About = () => {
  return (
    <Wrapper>
      <Subheading>ABOUT ME</Subheading>
      <Heading>Hi, I'm Kellie.</Heading>
      <Paragraph>I'm a <span>front-end developer</span> and hobbyist designer working at Parchot. 
      I value readable and maintainable code.</Paragraph>
      <Paragraph>My focus is vanilla <span>JavaScript</span> and <span>React</span>, including <span>Gatsby</span> and 
      <span> NextJS</span>. I use Node and Express for the backend. I'm also familiar with WordPress and PHP.</Paragraph>
    </Wrapper>
  )
}

export default About
