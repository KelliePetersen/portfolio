import styled from "styled-components"

const Subheading = styled.p`
  font-size: 0.75rem;
  word-spacing: 3px;
  letter-spacing: 3px;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 100%;
  font-weight: ${props => props.weight ? props.weight : "bold"};
  background-color: ${props => props.color ? props.color : props.theme.primary};
  background-image: ${props => props.color ? "" : props.theme.gradient};
  margin: 0;
`

export default Subheading;
