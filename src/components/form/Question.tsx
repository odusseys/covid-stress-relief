import React from "react"

import styled from "styled-components"
import RadioField from "./RadioField"
import { Question as QuestionType, Answer } from "../../helpers/types"
import MultiSelectField from "./MultiSelectField"

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2``

export default function Question({
  question,
  onChange,
  value,
}: {
  question: QuestionType
  onChange: (value: Answer) => void
  value: Answer
}) {
  const { id, options, type, message } = question
  return (
    <QuestionContainer>
      <QuestionTitle>{message}</QuestionTitle>
      {type === "radio" ? (
        <RadioField
          name={id}
          options={options}
          value={
            options.find(o => o.value === (value.value as string)) ?? options[0]
          }
          onChange={v => onChange({ id: id, type: "radio", value: v.value })}
        />
      ) : (
        <MultiSelectField
          options={options}
          value={value as any}
          onChange={value => onChange({ id: id, type: "multi", value })}
        />
      )}
    </QuestionContainer>
  )
}
