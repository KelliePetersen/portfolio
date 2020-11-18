import React from 'react'
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import GithubImage from '../images/github.svg';
import GitlabImage from '../images/gitlab.svg';
import LinkedInImage from '../images/linkedin.svg';

const Social = styled.a`
  width: 35px;
  height: 35px;
  display: block;
  background-repeat: no-repeat;
  background-position: center bottom;
`

const Github = styled(Social)`
  background-image: url(${GithubImage});
  background-size: 28px;
`
const Gitlab = styled(Social)`
  background-image: url(${GitlabImage});
  background-size: 28px;
`
const LinkedIn = styled(Social)`
background-image: url(${LinkedInImage});
  background-size: 26px;
`

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto 25px;
  width: max-content;
  @media ${device.tablet} {
    margin: 0 0 0 auto;
  }
`

const SocialMedia = () => {
  return (
    <Wrapper>
      <LinkedIn href="https://www.linkedin.com/in/kelliepetersen" aria-label="linkedIn" target="_blank" rel="noreferrer" />
      <div style={{margin: "0 20px"}}>
        <Gitlab href="https://www.gitlab.com/kelliepetersen" aria-label="gitlab" target="_blank" rel="noreferrer" />
      </div>
      <Github href="https://www.github.com/kelliepetersen" aria-label="github" target="_blank" rel="noreferrer" />
    </Wrapper>
  )
}

export default SocialMedia
