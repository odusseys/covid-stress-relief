import React, { ReactNode, useState } from "react"
import Item from "../Item"
import { Button } from "../buttons"
import styled from "styled-components"

const CTA = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default function Foldable({
  short,
  long,
  defaultOpen = false,
}: {
  short: ReactNode
  long: ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <Item small={!open}>
      {open ? long : short}
      {!open && (
        <CTA>
          <Button aspect="plain" onClick={() => setOpen(true)}>
            Voir plus
          </Button>
        </CTA>
      )}
    </Item>
  )
}
