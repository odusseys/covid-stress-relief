import React, { ReactNode } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import Sticky from "../components/Sticky"

import "./layout.css"

const Header = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 600px) {
    height: 60px;
    font-size: 18px;
  }
`

const DEFAUT_THEME = {
  colors: {
    primary: "blue",
    secondary: "rgb(22, 22, 29)",
    secondary70: "rgba(22, 22, 29, 0.7)",
  },
}
const Contents = styled.div`
  display: flex;
  padding: 32px 32px 0 32px;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 16px 16px 0 16px;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Main = styled.main`
  max-height: 100%;
  overflow-y: auto;
  @media (max-width: 600px) {
    max-height: initial;
    overflow-y: initial;
  }
`

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={DEFAUT_THEME}>
      <Header>CALM</Header>
      <Nav>Nav todo</Nav>
      <Contents>
        <Sticky />
        <Main>{children}</Main>
      </Contents>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
