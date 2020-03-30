import React from "react"
import { Link } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Button } from "../components/buttons"
import Item from "../components/Item"
import { FaArrowRight } from "react-icons/fa"
import Share from "../components/Share"
import CompanyPrompt from "../components/content/CompanyPrompt"

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 32px;
`

const Left = styled.section`
  max-width: 600px;
  button {
    transform: scale(1.2) translateY(-8px);
  }
`

const Right = styled.section`
  max-width: 600px;
  margin-left: 32px;
  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 16px;
  }
`

const Main = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
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
        <h1>Diminuez votre stress pendant cette période de confinement</h1>
        <h2>
          Vous trouverez ici des ressources simples et pratiques, recommandées
          exprès pour vous
        </h2>
      </Top>
      <Main>
        <Left>
          <RightItem recommended>
            <h3 style={{ fontSize: 16, marginBottom: 16 }}>
              🌟 Ressources personnalisées
            </h3>
            <p style={{ maxWidth: 600, marginBottom: 32 }}>
              Le questionnaire suivant vous permettra d'identifier les
              ressources les mieux adaptées à votre cas individuel, afin de
              surmonter au mieux la situation actuelle
            </p>
            <Link to="/quizz" style={{ textDecoration: "none" }}>
              <Button aspect="primary">
                Essayer le questionnaire{" "}
                <FaArrowRight style={{ marginLeft: 8 }} />
              </Button>
            </Link>
          </RightItem>
        </Left>
        <Right>
          <CompanyPrompt />
          <Share />
        </Right>
      </Main>
    </Container>
  </Layout>
)

export default IndexPage
