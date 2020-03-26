import React, { useState, useMemo } from "react"

import styled from "styled-components"
import { Answer, Question, QuestionType } from "../../helpers/types"
import QuestionComponent from "../../components/form/Question"
import { useMessageFormatter } from "../../helpers/intl"
import { Button } from "../buttons"

const useSeverityOptions = () => {
  const mf = useMessageFormatter()
  return [
    { value: "none", label: mf("Quizz.frequency.none"), severity: 0 },
    { value: "mild", label: mf("Quizz.frequency.mild"), severity: 1 },
    { value: "moderate", label: mf("Quizz.frequency.moderate"), severity: 2 },
    { value: "severe", label: mf("Quizz.frequency.severe"), severity: 3 },
    {
      value: "verySevere",
      label: mf("Quizz.frequency.verySevere"),
      severity: 4,
    },
  ]
}

const useYesNo = () => {
  const mf = useMessageFormatter()
  return [
    { value: "no", label: mf("Quizz.boolean.no"), severity: 0 },
    { value: "somewhat", label: mf("Quizz.boolean.somewhat"), severity: 1 },
    { value: "yes", label: mf("Quizz.boolean.yes"), severity: 2 },
  ]
}

// const HAMILTON_QUESTION_IDS = [
//   "anxious",
//   "tension",
//   "fears",
//   "insomnia",
//   "intellectual",
//   "depressed",
//   "somaticMuscular",
//   "somaticSensory",
//   "cardiovascular",
//   "respiratory",
//   "gastrointestinal",
//   "genitourinary",
//   "autonomic",
// ].map(q => `hamilton.${q}`)

const useQuestions = (): Question[] => {
  const severity = useSeverityOptions()
  const yesNo = useYesNo()
  const mf = useMessageFormatter()
  return useMemo(
    () => [
      {
        id: QuestionType.SICK,
        type: "radio" as const,
        options: severity,
        message: mf("Quizz.SICK"),
      },
      {
        type: "multi" as const,
        id: QuestionType.NEWS as const,
        message: mf("Quizz.NEWS"),
        options: [
          "friends",
          "onlineNews",
          "tv",
          "liveTv",
          "socialMedia",
          "newspapers",
          "socialNetworks",
          "government",
          "other",
        ].map(p => ({
          label: mf(`Quizz.infoSource.${p}`),
          value: p,
          severity: 0,
        })),
      },
      {
        id: QuestionType.PHYSICAL,
        type: "radio" as const,
        message: mf("Quizz.PHYSICAL"),
        options: yesNo,
      },
      {
        id: QuestionType.RHYTHM,
        type: "radio" as const,
        message: mf("Quizz.RHYTHM"),
        options: yesNo,
      },
      {
        id: QuestionType.ISOLATION,
        type: "radio" as const,
        message: mf("Quizz.ISOLATION"),
        options: yesNo,
      },
      {
        id: QuestionType.BORED,
        type: "radio" as const,
        message: mf("Quizz.BORED"),
        options: yesNo,
      },
    ],
    []
  )
}

const Pagination = styled.div`
  display: flex;
  justify-content: center;
`

const Quizz = ({ onComplete }: { onComplete: (answers: Answer[]) => void }) => {
  const mf = useMessageFormatter()
  const questions = useQuestions()
  const [answers, setAnswers] = useState<Answer[]>(
    questions.map(({ id, type }) => ({ id, type }) as any)
  )
  const [index, setIndex] = useState(0)
  const question = questions[index]
  return (
    <>
      <h1>{mf("Quizz.title")}</h1>
      <QuestionComponent
        value={answers[index]}
        question={question}
        onChange={a => {
          const res = [...answers]
          res[index] = a
          setAnswers(res)
        }}
      />
      <Pagination>
        {index === 0 ? (
          <span />
        ) : (
          <Button onClick={() => setIndex(index - 1)}>
            {mf("buttons.previous")}
          </Button>
        )}
        {index === questions.length - 1 ? (
          <span />
        ) : (
          <Button onClick={() => setIndex(index + 1)}>
            {mf("buttons.skip")}
          </Button>
        )}
        {index === questions.length - 1 ? (
          <Button onClick={() => onComplete(answers)}>
            {mf("buttons.submit")}
          </Button>
        ) : (
          <Button aspect="primary" onClick={() => setIndex(index + 1)}>
            {mf("buttons.next")}
          </Button>
        )}
      </Pagination>
    </>
  )
}

export default Quizz
