import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../global/mediaQueries"

const TopButton = styled(Link)`
  position: ${props => props.fixed ? "fixed" : ""};
  display: ${props => props.fixed ? "block" : "none"};
  bottom: 15px;
  right: 35px;
  z-index: 20;
  @media ${device.mobile} {
    right: 55px;
  }
  @media ${device.tablet} {
    display: ${props => props.fixed ? "none" : "block"};
  }
`

const Arrow = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-top: 3px solid ${props => props.theme.grey};
  border-left: 3px solid ${props => props.theme.grey};
  transform: rotate(45deg);
`

const BackToTop = ({ fixed }) => (
    <TopButton fixed={fixed} to="#">
      <Arrow />
    </TopButton>
  )

export default BackToTop
