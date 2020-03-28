import React from "react"
import { Link } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Button } from "../components/buttons"
import Item from "../components/Item"

const Container = styled.div`
  display: flex;
  align-items: stretch;
  margin-right: 32px;
  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 16px;
    margin-right: 0;
  }
`

const Left = styled.section``

const Right = styled.section`
  flex: 1;
  margin-left: 32px;
  @media (max-width: 600px) {
  }
`

const RightItem = styled(Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Top>
      <h1>Bienvenue </h1>
      <h2>
        Vous trouverez ici une collection de conseils et ressources
        individualisées
      </h2>
    </Top>

    <Container>
      <Left>
        <RightItem>
          <h3 style={{ fontSize: 16, marginBottom: 16 }}>
            🌟 Ressources personnalisées
          </h3>
          <p style={{ maxWidth: 600, marginBottom: 32 }}>
            Le questionnaire suivant vous permettra d'identifier les ressources
            les mieux adaptées à votre cas individuel, afin de surmonter au
            mieux la situation actuelle
          </p>
          <Link to="/quizz" style={{ textDecoration: "none" }}>
            <Button aspect="primary">Essayer le questionnaire</Button>
          </Link>
        </RightItem>
      </Left>
      <Right>
        <Item>
          <h3>Toutes les ressources</h3>
          <p>
            Toutes les ressources, y compris un lien vers l'attestation à
            imprimer, <Link to="/resources">sont disponibles ici</Link>
          </p>
        </Item>
      </Right>
    </Container>
  </Layout>
)

export default IndexPage
