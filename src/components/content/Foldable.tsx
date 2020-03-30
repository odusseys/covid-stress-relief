import React, { ReactNode, useState } from "react"
import Item from "../Item"
import { Button } from "../buttons"
import styled, { css } from "styled-components"
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
  recommended = false,
}: {
  short: ReactNode
  long: ReactNode
  defaultOpen?: boolean
  recommended?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <Container
      recommended={recommended}
      small={!open}
      hoverable={!open}
      onClick={() => {
        !open && setOpen(true)
      }}
    >
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
