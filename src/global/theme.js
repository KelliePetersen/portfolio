import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  background: "#171717",
  lightBackground: "#1c1c1c",
  color: "white",
  grey: "#ccc",
  primary: "#00f4ff",
  secondary: "#00a1ff",
  tertiary: "#764ba2",
  // gradient: "linear-gradient(to right bottom, #ff8c00, #ff7526, #ff5e3c, #ff4550, #ff2d64, #f82374, #ef2084, #e22493, #c9349d, #ae3fa3, #9246a5, #764ba2);",
  // gradient: "linear-gradient(to right bottom, #ff8c00, #ff0800);",
  // gradient: "linear-gradient(to right, rgb(133, 231, 175), rgb(6, 116, 123));",
  gradient: "linear-gradient(to right bottom, #00f4ff, #00e1ff, #00ceff, #00b8ff, #00a1ff, #3f92f5, #5a82e8, #6e71d8, #7267cb, #755ebd, #7654af, #764ba2);",
  conicGradient: "conic-gradient(to right, #FF8C00, #FF0080)",
  headingFont: ["Manrope, Avenir Next, Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif"],
  textFont: ["Lato, Avenir Next, Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif"],
  boxShadow: "5px 5px 5px rgba(0,0,0,0.3)"
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme