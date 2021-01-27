import styled from "styled-components"
import { device } from "../global/mediaQueries"

const Heading = styled.h2`
  font-family: ${props => props.theme.headingFont};
  font-size: ${props => props.large ? "2rem" : "1.75rem"};
  margin: ${props => props.large ? "20px 0 30px" : "10px 0 15px"};
  line-height: 1.35;
  letter-spacing: 0.5px;

  @media ${device.laptop} {
    font-size: ${props => props.large ? "2.5rem" : "2.25rem"};
    margin: 20px 0 30px;
  }
  @media ${device.laptopL} {
    margin: 20px 0;
  }
  @media ${device.desktopL} {
    font-size: ${props => props.large ? "3rem" : "2.5rem"};
    margin: 30px 0;
  }
`

export default Heading;
