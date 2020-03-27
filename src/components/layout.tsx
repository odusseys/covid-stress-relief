import React, { ReactNode } from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import "./layout.css"
import { Link } from "gatsby"

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
  flex: 1;
  padding: 32px 32px 0 32px;
  font-size: 12px;

  h1 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 32px;
  }

  h2 {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 16px 16px 0 16px;
    font-size: 11px;

    h1 {
      font-size: 15px;
      margin-bottom: 32px;
    }

    h2 {
      font-size: 13px;
      margin-bottom: 16px;
    }

    h3 {
      font-size: 12px;
      margin-bottom: 8px;
    }
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`

const MainContainer = styled.div`
  position: relative;
  flex: 1;
  align-self: stretch;
  @media (max-width: 600px) {
    max-height: initial;
    overflow-y: initial;
  }
`

const Main = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  @media (max-width: 600px) {
    max-height: initial;
    overflow-y: initial;
  }
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
`

const NavItemContainer = styled.a<{ active: boolean }>`
  display: block;
  padding: 8px 16px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: 2px;
    background: ${({ active, theme }) =>
      active ? theme.colors.primary : "transparent"};
  }
`

const NavItem = ({
  to,
  name,
  location,
  exact,
}: {
  to: string
  name: string
  location: Location
  exact?: boolean
}) => {
  return (
    <NavItemContainer
      active={
        exact ? location.pathname === to : location.pathname.startsWith(to)
      }
    >
      <Link to={to}>{name}</Link>
    </NavItemContainer>
  )
}

const Layout = ({
  children,
  location,
}: {
  children: ReactNode
  location: Location
}) => {
  return (
    <ThemeProvider theme={DEFAUT_THEME}>
      <Wrapper>
        <Header>
          <Link to="/">CALM</Link>
        </Header>
        <Nav>
          <NavItem to="/" name="Accueil" exact location={location} />
          <NavItem to="/quizz" name="Questionnaire" location={location} />
          <NavItem to="/resources" name="Ressources" location={location} />
        </Nav>
        <Contents>
          <MainContainer>
            <Main>{children}</Main>
          </MainContainer>
        </Contents>
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
