import { useIntl } from "gatsby-plugin-intl"

export function useMessageFormatter() {
  const intl = useIntl()
  return (id: string, values?: any) => intl.formatMessage({ id }, values)
}
