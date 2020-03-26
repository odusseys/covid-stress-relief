import React from "react"
import styled from "styled-components"
import Item from "./Item"

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
        <a
          href="https://www.interieur.gouv.fr/Actualites/L-actu-du-Ministere/Attestation-de-deplacement-derogatoire-et-justificatif-de-deplacement-professionnel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vous la trouverez sur le site du Ministère en suivant ce lien.
        </a>
      </Item>
    </Container>
  )
}
