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

const IndexPage = () => (
  <Layout location={location}>
    <SEO title="Home" />
    <h1>Welcome to Calm</h1>
    <h2>
      Calm gives you the tools to make the current health situation less
      stressful
    </h2>
    <Container>
      <Left>
        <Sticky />
      </Left>
      <Right>
        <h3>Ressources personnalisées</h3>
        <p style={{ maxWidth: 600, marginBottom: 32 }}>
          Le questionnaire suivant vous permettra d'identifier les ressources
          les mieux adaptées à votre cas individuel, afin de surmonter au mieux
          la situation actuelle
        </p>
        <Link to="quizz">
          <Button aspect="primary">Essayer le questionnaire</Button>
        </Link>
      </Right>
    </Container>
  </Layout>
)

export default IndexPage
