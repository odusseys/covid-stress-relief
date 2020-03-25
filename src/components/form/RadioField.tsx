import Field from "./Field"

type Option = {
  value: string
  label: string
}

export default function RadioField({
  question,
  name,
  options,
  value,
  onChange,
}: {
  question: string
  name: string
  options: Option[]
  value: Option
  onChange: (o: Option) => void
}) {
  return (
    <Field question={question}>
      <div
        onChange={e =>
          onChange(options.find(o => o.value === (e.target as any).value))
        }
      >
        {options.map(o => (
          <>
            <label key={o.value}>
              <input type="radio" value={o.value} name={name} /> {o.label}
            </label>
          </>
        ))}
      </div>
    </Field>
  )
}
