const StarBackground = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.5;
  background-size: cover;
  @media ${device.desktopL} {
    background-position: center;
    background-size: initial;
  }
`

export default StarBackground