import styled from "styled-components"
import { device } from "../global/mediaQueries"

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  letter-spacing: 0.5px;
  color: ${props => props.theme.grey};
  max-width: 500px;
  
  @media ${device.desktopL} {
    max-width: 550px;
    font-size: 1.125rem;
  }

  & > span {
    color: ${props => props.theme.color};
    font-weight: bold;
  }
`

export default Paragraph;
