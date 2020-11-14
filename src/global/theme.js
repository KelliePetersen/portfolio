import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  background: "#1a1a1a",
  lightBackground: "#1f1f1f",
  color: "white",
  grey: "#ccc",
  primary: "#85e7af",
  secondary: "#3aa390",
  tertiary: "#06747b",
  gradient: "linear-gradient(to right, #85e7af, #06747b)",
  conicGradient: "conic-gradient(to right, #85e7af, #06747b)",
  headingFont: "Manrope",
  textFont: "Lato"
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme