import styled from "styled-components"

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  letter-spacing: 0.5px;
  color: ${props => props.theme.grey};

  & > span {
    color: ${props => props.theme.color};
    font-weight: bold;
  }
`

export default Paragraph;
