import React from "react"
import styled from "styled-components"
import { device } from "../global/mediaQueries"
import GitHub from "../images/github.svg";
import GitLab from "../images/gitlab.svg";
import LinkedIn from "../images/linkedin.svg";

const Social = styled.a`
  width: 30px;
  height: 30px;
  display: block;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 25px;
  background-image: url(${props => props.backgroundImage});
  margin: ${props => props.padded ? "0 20px" : 0};
  transition: transform 0.25s;

  @media ${device.desktopL} {
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

const SocialMedia = ({ modal }) => (
  <Wrapper modal={modal}>
    <Social href="https://www.linkedin.com/in/kelliepetersen" backgroundImage={LinkedIn} aria-label="LinkedIn" target="_blank" rel="noreferrer" />
    <Social href="https://www.gitlab.com/kelliepetersen" backgroundImage={GitLab} aria-label="GitLab" target="_blank" rel="noreferrer" padded />
    <Social href="https://www.github.com/kelliepetersen" backgroundImage={GitHub} aria-label="GitHub" target="_blank" rel="noreferrer" />
  </Wrapper>
)

export default SocialMedia
