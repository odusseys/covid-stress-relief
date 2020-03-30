import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Recommendation } from "../helpers/types"
import { RecommendationItem } from "../components/quizz/Recommendations"
import Sticky from "../components/Sticky"
import Share from "../components/Share"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -16px;
  & > * {
    margin: 16px;
  }
  @media (max-width: 600px) {
    margin: -8px;
    & > * {
      margin: 8px;
    }
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="Ressources" />
    <h1 style={{ marginBottom: 8 }}>Ressources</h1>
    <Share />
    <Container>
      <Sticky />
      {Object.values(Recommendation).map(r => (
        <RecommendationItem recommendation={r} recommended={false} />
      ))}
    </Container>
  </Layout>
)

export default NotFoundPage
