import React, { ReactNode } from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import "./layout.css"
import { Link } from "gatsby-plugin-intl"

const Header = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  * {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 600px) {
    height: 60px;
    font-size: 18px;
  }
`

const DEFAUT_THEME = {
  colors: {
    primary: "#169af2",
    secondary: "rgb(22, 22, 29)",
    secondary70: "rgba(22, 22, 29, 0.7)",
    secondary8: "rgba(22, 22, 29, 0.08)",
  },
}
const Contents = styled.div`
  display: flex;
  flex: 1;
  padding: 32px 32px 0 32px;
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

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 16px 16px 0 16px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px ${({ theme }) => theme.colors.secondary8} solid;
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

const NavItemContainer = styled.div`
  a {
    text-decoration: none;
    color: initial;
    display: flex;
    text-align: center;
    padding: 8px 16px;
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
`

const NavItem = ({
  to,
  name,
  location,
}: {
  to: string
  name: string
  location: Location
}) => {
  console.log(location.pathname, to)
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
          <Link to="/" style={{ textDecoration: "none" }}>
            CALM
          </Link>
        </Header>
        <Nav>
          <NavItem to="/" name="🏠 Accueil" location={location} />
          <NavItem to="/quizz" name="❔ Questionnaire" location={location} />
          <NavItem to="/resources" name="📚 Ressources" location={location} />
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
