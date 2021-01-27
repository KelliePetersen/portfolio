import styled from "styled-components"
import { device } from "../global/mediaQueries"

const Subheading = styled.p`
  font-size: 0.75rem;
  word-spacing: 3px;
  letter-spacing: 3px;
  margin: 0;
  width: max-content;
  font-weight: ${props => props.normal ? "400" : "bold"};
  color: ${props => props.normal ? "#bbb" : "#aaa"};

  @media ${device.tablet} {
    font-size: ${props => props.normal ? "1rem" : "0.875rem"};
  }
  @media ${device.laptopL} {
    font-size: ${props => props.normal ? "0.875rem" : "0.75rem"};
  }
  @media ${device.desktopL} {
    font-size: 1rem;
    letter-spacing: ${props => props.normal ? "3px" : "5px"};
    word-spacing: ${props => props.normal ? "3px" : "5px"};
  }
`

export default Subheading;
