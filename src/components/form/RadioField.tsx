import React from "react"
import styled from "styled-components"

type Option = {
  value: string
  label: string
}

const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 16px;
  &:hover {
    opacity: 0.9;
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -16px;
`

export default function RadioField({
  name,
  options,
  value,
  onChange,
}: {
  name: string
  options: Option[]
  value: Option
  onChange: (o: Option) => void
}) {
  return (
    <Container
      onChange={e =>
        onChange(options.find(o => o.value === (e.target as any).value) as any)
      }
    >
      {options.map(o => (
        <Label key={o.value}>
          <input
            type="radio"
            value={o.value}
            name={name}
            checked={value.value === o.value}
          />
          {o.label}
        </Label>
      ))}
    </Container>
  )
}
