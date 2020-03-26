import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Answer } from "../helpers/types"
import Quizz from "../components/quizz/Quizz"

const QuizzPage = () => {
  const [answers, setAnswers] = useState<Answer[]>()
  return (
    <Layout>
      <SEO title="Quizz" />
      {answers ? "h" : <Quizz onComplete={setAnswers} />}
    </Layout>
  )
}

export default QuizzPage
