import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Sticky from "../components/Sticky"
import { Button } from "../components/buttons"

const Container = styled.div`
  display: flex;
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const IndexPage = ({ location }: { location: Location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <h1>Bienvenue </h1>
    <h2>
      Vous trouverez ici une collection de conseils et ressources
      individualisées
    </h2>
    <Container>
      <Left>
        <Sticky />
      </Left>
      <Right>
        <h3 style={{ fontSize: 16, marginBottom: 16 }}>
          🌟 Ressources personnalisées
        </h3>
        <p style={{ maxWidth: 600, marginBottom: 32 }}>
          Le questionnaire suivant vous permettra d'identifier les ressources
          les mieux adaptées à votre cas individuel, afin de surmonter au mieux
          la situation actuelle
        </p>
        <Link to="quizz" style={{ textDecoration: "none" }}>
          <Button aspect="primary">Essayer le questionnaire</Button>
        </Link>
      </Right>
    </Container>
  </Layout>
)

export default IndexPage
