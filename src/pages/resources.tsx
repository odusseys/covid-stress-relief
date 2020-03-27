import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Recommendation } from "../helpers/types"
import { RecommendationItem } from "../components/quizz/Recommendations"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -16px;
  & > * {
    margin: 16px;
  }
`

const NotFoundPage = ({ location }: { location: Location }) => (
  <Layout location={location}>
    <SEO title="Ressources" />
    <h1>Ressources</h1>
    <Container>
      {Object.values(Recommendation).map(r => (
        <RecommendationItem recommendation={r} defaultOpen={false} />
      ))}
    </Container>
  </Layout>
)

export default NotFoundPage
