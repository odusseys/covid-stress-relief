import React from "react"
import styled from "styled-components"
import { Button } from "../buttons"
import { Link } from "gatsby-plugin-intl"
import Item from "../Item"
import { FaArrowRight } from "react-icons/fa"

const Container = styled(Item)`
  border: 2px rgba(22, 154, 242, 0.42) solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export default function CompanyPrompt() {
  return (
    <Container>
      <h2>Vous voulez aider vos collègues ou employés ?</h2>
      <Link to="/companies" style={{ textDecoration: "none" }}>
        <Button aspect="primary">
          Découvrir comment <FaArrowRight style={{ marginLeft: 8 }} />{" "}
        </Button>
      </Link>
    </Container>
  )
}
