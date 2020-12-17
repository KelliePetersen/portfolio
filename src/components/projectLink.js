import styled from "styled-components"
import { device } from "../global/mediaQueries"

const ProjectLink = styled.a`
  display: inline-block;
  position: relative;
  color: ${props => props.theme.color};
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1.75px;
  padding: 0 30px 0 0;
  transition: color 0.25s;

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
    margin-top: 20px;
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: calc(100% - 20px);
    transform: translateY(-50%) scaleX(-1);
    width: 40px;
    height: 3px;
    background-color: ${props => props.theme.primary};
    background-image: ${props => props.theme.gradient};
    transition: width 0.25s;
  }

  &:hover, &:focus {
    color: ${props => props.theme.secondary};
  }

  &:hover::after, &:focus::after {
    width: 50px;
  }
`

export default ProjectLink;
