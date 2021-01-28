import styled from "styled-components"
import { device } from "../global/mediaQueries"

const Subheading = styled.p`
  font-size: 0.75rem;
  word-spacing: 3px;
  letter-spacing: 3px;
  width: max-content;
  margin: ${props => props.centered ? "0 auto" : "0"};;
  font-weight: ${props => props.normal ? "400" : "bold"};
  font-family: ${props => props.theme.textFont};
  color: ${props => props.normal ? "#bbb" : "#aaa"};

  @media ${device.laptopL} {
    letter-spacing: ${props => props.normal ? "3px" : "5px"};
    word-spacing: ${props => props.normal ? "3px" : "5px"};
  }
  @media ${device.desktopL} {
    font-size: 1rem;
  }
`

export default Subheading;
