import React from 'react'
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import GitHub from '../images/github.svg';
import GitLab from '../images/gitlab.svg';
import LinkedIn from '../images/linkedin.svg';

const Social = styled.a`
  width: 50px;
  height: 50px;
  display: block;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 40px;
  transition: transform 0.25s;

  @media ${device.tablet} {
    background-size: 35px;
  }
  @media ${device.laptop} {
    width: 35px;
    height: 35px;
    background-size: 28px;
  }

  &:hover, &:focus {
    transform: scale(1.1);
  }
  &:focus {
    outline: 2px dashed ${props => props.theme.secondary};
  }
`

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto 25px;
  width: max-content;
  @media ${device.tablet} {
    margin: 0 0 0 auto;
  }
  ${({modal}) => modal && `
    display: none;
    @media (min-height: 500px) {
      display: flex;
      position: absolute;
      bottom: 10vh;
      left: 50%;
      transform: translateX(-50%);
    }
  `}
`

const SocialLink = ({ link, name }) => (
  <Social href={link} style={{backgroundImage: `url(${name})`}} aria-label={name} target="_blank" rel="noreferrer" />
)

const SocialMedia = ({ modal }) => {
  return (
    <Wrapper modal={modal}>
      <SocialLink link="https://www.linkedin.com/in/kelliepetersen" name={LinkedIn} />
      <div style={{margin: '0 20px'}}>
        <SocialLink link="https://www.gitlab.com/kelliepetersen" name={GitLab} />
      </div>
      <SocialLink link="https://www.github.com/kelliepetersen" name={GitHub} />
    </Wrapper>
  )
}

export default SocialMedia
