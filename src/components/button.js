import styled from "styled-components"

const Button = styled.a`
  position: relative;
  color: white;
  text-decoration: none;
  border: 3px solid ${props => props.theme.primary};
  border-image: linear-gradient(to right, 
    ${props => props.theme.primary} 10%, 
    ${props => props.theme.tertiary} 50%, 
    ${props => props.theme.tertiary} 98%, 
    rgba(0,0,0,0) 98%);
  border-image-slice: 1;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1.75px;
  padding: 17.5px 30px 17.5px 20px;
  display: inline-block;

  &::before {
    content: "";
    position: absolute;
    top: -2.5px;
    right: 0;
    bottom: -2.5px;
    width: 3px;
    background-image: linear-gradient(to bottom,
      ${props => props.theme.tertiary} 30%,
      rgba(0,0,0,0) 30%,
      rgba(0,0,0,0) 70%,
      ${props => props.theme.tertiary} 70%);
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

export default Button;
