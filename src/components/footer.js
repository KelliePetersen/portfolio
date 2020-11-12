import React from "react"
import styled from "styled-components"
import SocialMedia from "./socialMedia"

const Wrapper = styled.footer`
  margin-top: 50px;
`

const Text = styled.p`
  font-size: 0.75rem;
  color: #b3b3b3;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 1.35;

  & > span {
    display: block;
  }
`

const Footer = () => (
  <Wrapper>
    <SocialMedia />
    <Text>© Copyright {new Date().getFullYear()} &bull; Kellie Petersen. <span>All Rights Reserved.</span></Text>
  </Wrapper>
)

export default Footer
