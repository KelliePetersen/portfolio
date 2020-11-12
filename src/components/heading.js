import styled from "styled-components"

const Heading = styled.h2`
  font-family: ${props => props.theme.headingFont};
  font-size: ${props => props.large ? "2.25rem" : "2rem"};
  margin: ${props => props.large ? "30px 0 40px" : "20px 0 30px"};
  line-height: 1.35;
`

export default Heading;
