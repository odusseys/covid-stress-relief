import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Recommendations from "../components/quizz/Recommendations"
import qs from "query-string"
import { Recommendation } from "../helpers/types"

const QuizzPage = ({ location }: { location: Location }) => {
  const reco = qs.parse(location.search)
  const recommendations = new Set(Object.keys(reco)) as Set<Recommendation>
  return (
    <Layout>
      <SEO title="Recommandations" />
      <Recommendations recommendations={recommendations} />
    </Layout>
  )
}

export default QuizzPage
