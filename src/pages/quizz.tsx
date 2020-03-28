import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Quizz from "../components/quizz/Quizz"
import { getRecommendations } from "../helpers/recommendations"
import { navigate } from "gatsby-plugin-intl"
import qs from "query-string"

const QuizzPage = () => {
  return (
    <Layout>
      <SEO title="Quizz" />
      <Quizz
        onComplete={answers => {
          const reco = getRecommendations(answers)
          const q = qs.stringify(reco)
          navigate(`/recommendations?${q}`)
        }}
      />
    </Layout>
  )
}

export default QuizzPage
