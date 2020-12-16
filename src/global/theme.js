import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  background: "#171717",
  lightBackground: "#1c1c1c",
  color: "white",
  grey: "#ccc",
  primary: "#85e7af",
  secondary: "#3aa390",
  tertiary: "#06747b",
  gradient: "linear-gradient(to right, #85e7af, #06747b)",
  conicGradient: "conic-gradient(to right, #85e7af, #06747b)",
  headingFont: ["Manrope, Avenir Next, Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif"],
  textFont: ["Lato, Avenir Next, Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif"],
  boxShadow: "5px 5px 5px rgba(0,0,0,0.3)"
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme