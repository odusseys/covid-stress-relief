import React from "react"

import { Answer } from "../../helpers/types"
import { useMemo } from "react"
import { getRecommendations } from "../../helpers/recommendations"

export default function Recommendations({ answers }: { answers: Answer[] }) {
  const recommendations = useMemo(() => getRecommendations(answers), [answers])
  return <div>{JSON.stringify(recommendations)}</div>
}
