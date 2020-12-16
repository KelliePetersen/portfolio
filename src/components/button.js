import styled from "styled-components"
import { device } from "../global/mediaQueries"

const Button = styled.a`
  display: inline-block;
  position: relative;
  color: white;
  text-decoration: none;
  // border: 3px solid ${props => props.theme.tertiary};
  // border-image: ${props => props.theme.gradient};
  // border-image-slice: 1;
  background-color: ${props => props.theme.tertiary};
  background-image: ${props => props.theme.gradient};
  background-size: 200%;
  background-position: right;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1.75px;
  padding: 20px 40px;
  transition: background 0s;

  @media ${device.tablet} {
    font-size: 1.125rem;
  }

  &:hover, &:focus {
    transition: background 0.75s;
    background-size: 300%;
    background-position: left;
    background-image: linear-gradient(to right, 
      ${props => props.theme.secondary}, 
      ${props => props.theme.tertiary} 30%,
      ${props => props.theme.secondary} 50%,
      ${props => props.theme.secondary}
    )
  }
`

export default Button;
