import React from 'react'
import styled from "styled-components"
import { device } from "../global/mediaQueries"

const Social = styled.a`
  width: 35px;
  height: 35px;
  display: block;
  background-color: white;
  border-radius: 50%;
`

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto 25px;
  width: max-content;
  @media ${device.tablet} {
    margin: 0 0 0 auto;
  }
`

const SocialLink = ({ href, label }) => (
  <Social target="_blank" rel="noreferrer" href={href} aria-label={label} />
)

const SocialMedia = () => {
  return (
    <Wrapper>
      <SocialLink href="https://www.github.com/kelliepetersen" label="github" />
      <div style={{margin: "0 20px"}}>
        <SocialLink href="https://www.linkedin.com/in/kelliepetersen" label="linkedIn" />
      </div>
      <SocialLink href="https://www.gitlab.com/kelliepetersen" label="gitlab" />
    </Wrapper>
  )
}

export default SocialMedia
