import React from "react"
import styled from "styled-components"
import Item from "./Item"
import OutLink from "./OutLink"

const Container = styled.section`
  width: 280px;
  margin-right: 32px;
  @media (max-width: 600px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 16px;
  }
`

export default function Sticky() {
  return (
    <Container>
      <Item style={{ marginBottom: 16 }}>
        <h2>Qu'est-ce que le COVID-19 ?</h2>
        <p>TBD</p>
      </Item>
      <Item>
        <h2>Attestation de déplacement</h2>
        <p>Une attestation est obligatoire pour tous les déplacements.</p>
        <OutLink href="https://www.interieur.gouv.fr/Actualites/L-actu-du-Ministere/Attestation-de-deplacement-derogatoire-et-justificatif-de-deplacement-professionnel">
          Vous la trouverez sur le site du Ministère en suivant ce lien.
        </OutLink>
      </Item>
    </Container>
  )
}
