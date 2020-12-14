import React from 'react'
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import GithubImage from '../images/github.svg';
import GitlabImage from '../images/gitlab.svg';
import LinkedInImage from '../images/linkedin.svg';

const Social = styled.a`
  width: 50px;
  height: 50px;
  display: block;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 40px;
  @media ${device.tablet} {
    background-size: 35px;
  }
  @media ${device.laptop} {
    width: 35px;
    height: 35px;
    background-size: 28px;
  }
`

const Github = styled(Social)`
  background-image: url(${GithubImage});
`
const Gitlab = styled(Social)`
  background-image: url(${GitlabImage});
`
const LinkedIn = styled(Social)`
  background-image: url(${LinkedInImage});
`

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto 25px;
  width: max-content;
  @media ${device.tablet} {
    margin: 0 0 0 auto;
  }

  ${({modal}) => modal && `
    position: absolute;
    bottom: 10vh;
    left: 50%;
    transform: translateX(-50%);
  `}
`

const SocialMedia = ({ modal }) => {
  return (
    <Wrapper modal={modal}>
      <LinkedIn href="https://www.linkedin.com/in/kelliepetersen" aria-label="linkedIn" target="_blank" rel="noreferrer" />
      <div style={{margin: '0 20px'}}>
        <Gitlab href="https://www.gitlab.com/kelliepetersen" aria-label="gitlab" target="_blank" rel="noreferrer" />
      </div>
      <Github href="https://www.github.com/kelliepetersen" aria-label="github" target="_blank" rel="noreferrer" />
    </Wrapper>
  )
}

export default SocialMedia
