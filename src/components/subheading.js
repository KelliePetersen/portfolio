import styled from "styled-components"
import { device } from "../global/mediaQueries"

const Subheading = styled.p`
  font-size: 0.75rem;
  word-spacing: 3px;
  letter-spacing: 3px;
  font-weight: ${props => props.weight ? props.weight : "bold"};
  color: ${props => props.color ? props.color : props.theme.secondary};
  margin: 0;

  @media ${device.tablet} {
    font-size: 1rem;
  }
`

export default Subheading;
