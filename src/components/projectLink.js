import styled from "styled-components"
import { device } from "../global/mediaQueries"

const ProjectLink = styled.a`
  display: inline-block;
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1.75px;
  padding: 0 30px 0 0;

  @media ${device.mobile} {
    position: absolute;
    top: 0;
    right: 20px;
  }
  @media ${device.tablet} {
    position: relative;
    right: 0;
  }
  @media ${device.laptopL} {
    padding: 17.5px 30px 17.5px 0;
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%) scaleX(-1);
    width: 40px;
    height: 3px;
    background-color: ${props => props.theme.primary};
    background-image: ${props => props.theme.gradient};
  }
`

export default ProjectLink;
