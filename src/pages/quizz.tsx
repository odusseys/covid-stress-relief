import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Answer } from "../helpers/types"
import Quizz from "../components/quizz/Quizz"
import Recommendations from "../components/quizz/Recommendations"

const QuizzPage = () => {
  const [answers, setAnswers] = useState<Answer[]>()
  return (
    <Layout>
      <SEO title="Quizz" />
      {answers ? (
        <Recommendations answers={answers} />
      ) : (
        <Quizz onComplete={setAnswers} />
      )}
    </Layout>
  )
}

export default QuizzPage
