import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`

const Left = styled.section``

const Right = styled.section``

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Calm</h1>
    <h2>
      Calm gives you the tools to make the current health situation less
      stressful
    </h2>
    <Container>
      <Left>Resources</Left>
      <Right>
        <Link to="quizz">Find out the best tools to help you</Link>
      </Right>
    </Container>
  </Layout>
)

export default IndexPage
