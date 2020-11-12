import { Link } from "gatsby"
import styled from "styled-components"

const Button = styled(Link)`
  position: relative;
  color: white;
  text-decoration: none;
  border: 3px solid ${props => props.theme.primary};
  border-image: ${props => props.theme.gradient};
  border-image-slice: 1;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1.75px;
  padding: 15px 30px 15px 25px;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -30px;
    transform: translateY(-50%) scaleX(-1);
    width: 60px;
    height: 22px;
    border: 10px solid ${props => props.light ? props.theme.lightBackground : props.theme.background};
    background-color: ${props => props.theme.primary};
    background-image: ${props => props.theme.gradient};
  }
`

export default Button;
