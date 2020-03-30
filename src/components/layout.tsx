import React, { ReactNode } from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import "./layout.css"
import { Link } from "gatsby-plugin-intl"

const Title = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  * {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 600px) {
    height: 60px;
    font-size: 18px;
  }
`

const Header = styled.div`
  background-color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
`

const DEFAUT_THEME = {
  colors: {
    primary: "#169af2",
    background: "rgba(35, 119, 188, 0.03)",
    secondary: "rgb(22, 22, 29)",
    secondary70: "rgba(22, 22, 29, 0.7)",
    secondary8: "rgba(22, 22, 29, 0.08)",
    secondary3: "rgba(22, 22, 29, 0.03)",
  },
}
const Contents = styled.div`
  display: flex;
  flex: 1;
  padding: 32px 32px 0 32px;

  @media (min-width: 800px) {
    align-self: center;
    width: 800px;
    max-width: 800px;
  }

  * {
    font-size: 13px;
  }

  h1 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 32px;
  }

  h2 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  ul {
    margin-bottom: 8px;
  }

  li {
    margin-left: 16px;
    margin-bottom: 4px;
    position: relative;
    &:before {
      position: absolute;
      left: -12px;
      top: 4px;
      content: "";
      width: 4px;
      height: 4px;
      border-radius: 2px;
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  hr {
    background-color: ${({ theme }) => theme.colors.secondary8};
    border-color: ${({ theme }) => theme.colors.secondary8};
    color: ${({ theme }) => theme.colors.secondary8};
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 16px 24px 0 24px;
    font-size: 11px;

    h1 {
      font-size: 16px;
      margin-bottom: 32px;
    }

    h2 {
      font-size: 14px;
      margin-bottom: 16px;
    }

    h3 {
      font-size: 13px;
      margin-bottom: 8px;
    }
  }
`

const Nav = styled.nav`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px ${({ theme }) => theme.colors.secondary8} solid;
`

const MainContainer = styled.div`
  flex: 1;
`

const Main = styled.main`
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
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding-top: 132px;
  @media (max-width: 600px) {
    padding-top: 112px;
  }
  background: ${({ theme }) => theme.colors.background};
`

const NavItemContainer = styled.div`
  a {
    text-decoration: none;
    color: initial;
    display: flex;
    text-align: center;
    padding: 16px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0;
      height: 2px;
    }
    &.active {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
      &:after {
        background: ${({ theme }) => theme.colors.primary};
      }
    }

    &:not(.active) {
      &:hover {
        opacity: 0.8;
      }
    }
  }
  @media (max-width: 600px) {
    font-size: 80%;
    a {
      padding: 8px;
    }
  }
`

const NavItem = ({ to, name }: { to: string; name: string }) => {
  return (
    <NavItemContainer>
      <Link
        getProps={({ isCurrent }: any) => {
          return {
            className: isCurrent ? "active" : null,
          }
        }}
        to={to}
      >
        {name}
      </Link>
    </NavItemContainer>
  )
}

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={DEFAUT_THEME}>
      <Wrapper>
        <Header>
          <Title>
            <Link to="/" style={{ textDecoration: "none" }}>
              mon confinement
            </Link>
          </Title>
          <Nav>
            <NavItem to="/" name="🏠 Accueil" />
            <NavItem to="/quizz" name="❔ Questionnaire" />
            <NavItem to="/resources" name="📚 Ressources" />
            <NavItem to="/companies" name="🏭 Entreprises" />
          </Nav>
        </Header>
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
