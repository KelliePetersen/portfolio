import React from 'react'
import styled from "styled-components"

const Social = styled.a`
  width: 35px;
  height: 35px;
  display: block;
  margin: 0 10px;
  background-color: white;
  border-radius: 50%;
`

const SocialLink = ({ href, label }) => (
  <Social target="_blank" rel="noreferrer" href={href} aria-label={label} />
)

const SocialMedia = () => {
  return (
    <div style={{display: 'flex', margin: '0 auto 25px', width: 'max-content'}}>
      <SocialLink href="https://www.github.com/kelliepetersen" label="github" />
      <SocialLink href="https://www.linkedin.com/kelliepetersen" label="linkedIn" />
      <SocialLink href="https://www.twitter.com/kelliecodes" label="twitter" />
    </div>
  )
}

export default SocialMedia
