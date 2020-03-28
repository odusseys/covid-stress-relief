import React from "react"

import styled from "styled-components"
import RadioField from "./RadioField"
import { Question as QuestionType, Answer } from "../../helpers/types"
import MultiSelectField from "./MultiSelectField"
import Item from "../Item"

const Container = styled(Item)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 32px);
  max-width: 600px;
`

const QuestionTitle = styled.h2`
  margin-bottom: 32px !important;
`

export default function Question({
  question,
  onChange,
  value,
}: {
  question: QuestionType
  onChange: (value: Answer) => void
  value: Answer
}) {
  return (
    <Container>
      <QuestionTitle>{question.message}</QuestionTitle>
      {question.type === "radio" ? (
        <RadioField
          name={question.id}
          options={question.options}
          value={
            question.options.find(o => o.value === (value.value as string)) ??
            question.options[0]
          }
          onChange={v =>
            onChange({
              id: question.id as any,
              type: "radio",
              value: v.value,
              severity: v.severity,
            })
          }
        />
      ) : (
        <MultiSelectField
          options={question.options}
          value={value.value as any}
          onChange={value =>
            onChange({ id: question.id as any, type: "multi", value })
          }
        />
      )}
    </Container>
  )
}
