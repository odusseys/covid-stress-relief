import React, { useState, ReactNode } from "react"

import styled from "styled-components"
import { Answer, Question, QuestionType } from "../../helpers/types"
import QuestionComponent from "../../components/form/Question"
import { Button } from "../buttons"
import { FaArrowLeft, FaArrowRight, FaClipboardList } from "react-icons/fa"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SEVERITY_OPTIONS = [
  { value: "none", label: "Pas du tout", severity: 0 },
  { value: "mild", label: "Peu", severity: 1 },
  { value: "moderate", label: "Modérément", severity: 2 },
  { value: "severe", label: "Sévèrement", severity: 3 },
  {
    value: "verySevere",
    label: "Très sévèrement",
    severity: 4,
  },
]

const YES_NO_OPTIONS = [
  { value: "no", label: "Non", severity: 0 },
  { value: "somewhat", label: "Parfois", severity: 1 },
  { value: "yes", label: "Oui", severity: 2 },
]

const QUESTIONS: Question[] = [
  {
    id: QuestionType.SICK,
    type: "radio" as const,
    options: SEVERITY_OPTIONS,
    message:
      "Êtes-vous inquèt-e d'être malade ou de tomber malade du COVID-19 ?",
  },
  {
    type: "multi" as const,
    id: QuestionType.NEWS,
    message: "Où trouvez-vous vos informations concernant le COVID-19 ?",
    options: [
      {
        label: "Amis",
        value: "friends",
      },
      {
        label: "Sites d'information en ligne",
        value: "onlineNews",
      },
      {
        label: "Journaux télévisés (13h, 20h, etc.)",
        value: "tv",
      },
      {
        label: "Chaînes de télévision en continu",
        value: "liveTv",
      },
      {
        label: "Réseaux sociaux",
        value: "socialMedia",
      },
      {
        label: "Journaux papier",
        value: "newspapers",
      },
      {
        label: "Gouvernement",
        value: "government",
      },
      {
        label: "Autres",
        value: "other",
      },
    ],
  },
  {
    id: QuestionType.PHYSICAL,
    type: "radio" as const,
    message: "Pratiquez-vous une activité physique régulière ?",
    options: YES_NO_OPTIONS,
  },
  {
    id: QuestionType.RHYTHM,
    type: "radio" as const,
    message:
      "Maintenez vous un rythme de vie quotidienne ? (se lever le matin, se doucher, s'habiller...)",
    options: YES_NO_OPTIONS,
  },
  {
    id: QuestionType.ISOLATION,
    type: "radio" as const,
    message: "Vous sentez vous isolé-e socialement ?",
    options: YES_NO_OPTIONS,
  },
  {
    id: QuestionType.BORED,
    type: "radio" as const,
    message: "Vous ennuyez-vous, ou vous sentez-vous frustré ?",
    options: SEVERITY_OPTIONS,
  },
  {
    id: QuestionType.SLEEP,
    type: "radio" as const,
    message: "Avez vous du mal à dormir ?",
    options: YES_NO_OPTIONS,
  },
]

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  @media (max-width: 600px) {
    margin-bottom: 16px;
  }
`
const PaginationItem = styled.div`
  flex: 1;
  display: flex;
`

const Pagination = ({
  left,
  right,
}: {
  left?: ReactNode
  right?: ReactNode
}) => {
  return (
    <PaginationContainer>
      <PaginationItem style={{ justifyContent: "flex-end" }}>
        {left}
      </PaginationItem>
      <PaginationItem style={{ margin: "0 32px", flex: "initial" }}>
        <span />
      </PaginationItem>
      <PaginationItem>{right}</PaginationItem>
    </PaginationContainer>
  )
}

const INITIAL_ANSWERS: Answer[] = QUESTIONS.map(q => {
  if (q.type === "radio")
    return {
      id: q.id,
      type: "radio",
      severity: q.options[0].severity,
      value: q.options[0].value,
    }
  return { id: q.id, type: "multi", value: {} }
})

const Quizz = ({ onComplete }: { onComplete: (answers: Answer[]) => void }) => {
  const [answers, setAnswers] = useState<Answer[]>(INITIAL_ANSWERS)
  const [index, setIndex] = useState(0)
  const question = QUESTIONS[index]
  const left =
    index === 0 ? (
      <span />
    ) : (
      <Button onClick={() => setIndex(index - 1)}>
        <FaArrowLeft style={{ marginRight: 8 }} />
        Question précédente{" "}
      </Button>
    )
  const right =
    index === QUESTIONS.length - 1 ? (
      <Button onClick={() => onComplete(answers)} aspect="primary">
        Résultats <FaClipboardList style={{ marginLeft: 8 }} />
      </Button>
    ) : (
      <Button aspect="primary" onClick={() => setIndex(index + 1)}>
        Question suivante <FaArrowRight style={{ marginLeft: 8 }} />
      </Button>
    )

  return (
    <Container>
      <h1>Questionaire</h1>
      <QuestionComponent
        value={answers[index]}
        question={question}
        onChange={a => {
          const res = [...answers]
          res[index] = a
          setAnswers(res)
        }}
      />
      <Pagination {...{ left, right }} />
    </Container>
  )
}

export default Quizz
