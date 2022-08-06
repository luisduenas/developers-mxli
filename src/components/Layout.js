import React from "react"
import GlobalStyles from "../styles/GlobalStyles"

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
)

export default Layout
