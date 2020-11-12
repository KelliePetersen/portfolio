import styled from "styled-components"

const Heading = styled.h1`
  font-family: ${props => props.theme.headingFont};
  font-size: 2.25rem;
  line-height: 1.35;
`

const HeadingTwo = styled.h2`
  font-family: ${props => props.theme.headingFont};
  font-size: 2rem;
`

export {Heading, HeadingTwo};
