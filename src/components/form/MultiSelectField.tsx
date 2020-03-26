import React from "react"

type Option = {
  value: string
  label: string
}

type Value = Record<string, boolean>

export default function MultiSelectField({
  options,
  value = {},
  onChange,
}: {
  options: Option[]
  value: Value
  onChange: (o: Value) => void
}) {
  console.log(value)
  return (
    <div>
      {options.map(o => (
        <label key={o.value}>
          <input
            type="checkbox"
            value={o.value}
            checked={value.value}
            onChange={e => onChange({ ...value, [o.value]: e.target.checked })}
          />
          {o.label}
        </label>
      ))}
    </div>
  )
}
