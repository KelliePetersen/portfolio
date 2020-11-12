import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


const Button = styled.Link`
  background: ${props => props.primary ? props.theme.main : "white"};
  color: ${props => props.primary ? "white" : props.theme.main};
  border: 2px solid green;
`

const SimpleButton = styled(Button)`
  color: white;
  background: none;
  border: none;
`

Button.defaultProps = {
  theme: {
    main: "green"
  }
}


/* External links: <Button as="a" href="/"> */