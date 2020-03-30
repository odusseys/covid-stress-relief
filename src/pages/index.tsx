import React from "react"
import { Link } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Button } from "../components/buttons"
import Item from "../components/Item"
import { FaArrowRight } from "react-icons/fa"
import Share from "../components/Share"

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Left = styled.section`
  max-width: 600px;
`

const Right = styled.section`
  max-width: 600px;
  margin-top: 32px;
  @media (max-width: 600px) {
    margin-top: 16px;
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
    <SEO title="Mon Confinement" />
    <Container>
      <Top>
        <h1>Bienvenue </h1>
        <h2>Pour diminuer son stress pendant cette période de confinement</h2>
        <p>
          Vous trouverez ici des ressources simples et pratiques, recommandées
          exprès pour vous
        </p>
      </Top>
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
            <Button aspect="primary">
              Essayer le questionnaire{" "}
              <FaArrowRight style={{ marginLeft: 8 }} />
            </Button>
          </Link>
        </RightItem>
      </Left>
      <Share />

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
