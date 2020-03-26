import React from "react"

type Option = {
  value: string
  label: string
}

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
    <div
      onChange={e =>
        onChange(options.find(o => o.value === (e.target as any).value) as any)
      }
    >
      {options.map(o => (
        <>
          <label key={o.value}>
            <input
              type="radio"
              value={o.value}
              name={name}
              checked={value.value === o.value}
            />{" "}
            {o.label}
          </label>
        </>
      ))}
    </div>
  )
}
