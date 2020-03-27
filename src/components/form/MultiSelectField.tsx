import React from "react"
import styled from "styled-components"

type Option = {
  value: string
  label: string
}

type Value = Record<string, boolean>

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -8px -16px;
`

const Label = styled.label`
  margin: 8px 16px;
`

export default function MultiSelectField({
  options,
  value = {},
  onChange,
}: {
  options: Option[]
  value: Value
  onChange: (o: Value) => void
}) {
  return (
    <Container>
      {options.map(o => (
        <Label key={o.value}>
          <input
            type="checkbox"
            value={o.value}
            checked={value.value}
            onChange={e => onChange({ ...value, [o.value]: e.target.checked })}
          />
          {o.label}
        </Label>
      ))}
    </Container>
  )
}
