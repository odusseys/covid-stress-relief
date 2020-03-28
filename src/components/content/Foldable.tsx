import React, { ReactNode, useState } from "react"
import Item from "../Item"
import { Button } from "../buttons"
import styled from "styled-components"
import { FaPlus, FaMinus } from "react-icons/fa"

const CTA = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Container = styled(Item)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    <Container small={!open}>
      <div>{open ? long : short}</div>

      <CTA>
        <Button aspect="plain" onClick={() => setOpen(!open)}>
          Voir {open ? "moins" : "plus"}{" "}
          {open ? (
            <FaMinus style={{ marginLeft: 4 }} />
          ) : (
            <FaPlus style={{ marginLeft: 4 }} />
          )}
        </Button>
      </CTA>
    </Container>
  )
}
