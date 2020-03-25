import styled from "styled-components"
import { ReactNode } from "react"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Label = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 32px;
`

export default function Field({
  question,
  children,
}: {
  question: String
  children: ReactNode
}) {
  return (
    <Container>
      <Label>{question}</Label>
      {children}
    </Container>
  )
}
