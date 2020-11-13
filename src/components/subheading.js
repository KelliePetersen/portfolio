import styled from "styled-components"

const Subheading = styled.p`
  font-size: 0.75rem;
  word-spacing: 3px;
  letter-spacing: 3px;
  font-weight: ${props => props.weight ? props.weight : "bold"};
  color: ${props => props.color ? props.color : props.theme.secondary};
  margin: 0;
`

export default Subheading;
