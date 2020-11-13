const size = {
  mobile: '320px',
  mobileL: '560px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1280px',
  desktop: '1920px'
}

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`
}