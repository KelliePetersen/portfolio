const size = {
  mobile: "560px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1280px",
  desktop: "1440px",
  desktopL: "1820px",
  widescreen: "2100px"
}

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
  widescreen: `(min-width: ${size.widescreen})`
}