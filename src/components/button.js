import styled from "styled-components"

const Button = styled.a`
  display: inline-block;
  position: relative;
  color: white;
  text-decoration: none;
  // border: 3px solid ${props => props.theme.primary};
  // border-image: ${props => props.theme.gradient};
  // border-image-slice: 1;
  background-color: ${props => props.theme.primary};
  background-image: ${props => props.theme.gradient};
  background-size: 200%;
  background-position: right;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1.75px;
  padding: 20px 40px;
`

export default Button;
