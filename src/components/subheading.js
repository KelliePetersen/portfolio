import styled from "styled-components"
import { device } from "../global/mediaQueries"

const Subheading = styled.p`
  font-size: 0.75rem;
  word-spacing: 3px;
  letter-spacing: 3px;
  margin: 0;
  width: max-content;
  font-weight: ${props => props.normal ? "400" : "bold"};
  color: ${props => props.normal ? "#999" : props.theme.secondary};
  background-color: ${props => props.normal ? "#999" : props.theme.secondary};
  background-image: ${props => props.normal ? "#999" : props.theme.gradient};
  background-image: ${props => props.normal ? "#999" : props.theme.conicGradient};
  background-size: 125%;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;

  @media ${device.tablet} {
    font-size: ${props => props.normal ? "1rem" : "0.875rem"};
  }
  @media ${device.laptop} {
    font-size: 1rem;
    letter-spacing: ${props => props.normal ? "3px" : "5px"};
    word-spacing: ${props => props.normal ? "3px" : "5px"};
  }
`

export default Subheading;
