import React from "react"
import styled from "styled-components"
import { device } from "../global/mediaQueries"

const Menu = styled.button`
  width: 40px;
  height: 26px;
  background: rgba(0,0,0,0);
  border: none;
  cursor: pointer;
  position: relative;
  @media ${device.laptop} {
    display: none;
  }

  ${({cross}) => cross && `
    & ${MenuBar}:nth-child(1) {
      box-shadow: none;
      top: -2.5px;
      transform: rotate(-45deg);
      transform-origin: right;
    }
    & ${MenuBar}:nth-child(2) {
      opacity: 0;
      transform: scaleX(1%);
      transform-origin: center;
    }
    & ${MenuBar}:nth-child(3) {
      box-shadow: none;
      bottom: -2.5px;
      transform: rotate(45deg);
      transform-origin: right;
    }
  `}
`

const MenuBar = styled.span`
  position: absolute;
  right: 0;
  top: ${props => props.top || "auto"};
  bottom: ${props => props.bottom || "auto"};
  transform: ${props => props.center ? "translateY(-50%)" : ""};
  width: 100%;
  height: 3px;
  background-color: ${props => props.theme.color};
  box-shadow: 0.5px 0.5px 1px black;
  transition: all 0.25s;
`

const MenuButton = ({ modalOpen, setModalOpen }) => {
  const handleModal = () => modalOpen ? setModalOpen(false) : setModalOpen(true)

  return (
    <Menu type="button" aria-label="open menu" onClick={handleModal} cross={modalOpen}>
      <MenuBar top="0" />
      <MenuBar top="50%" center />
      <MenuBar bottom="0" />
    </Menu>
  )
}

export default MenuButton
