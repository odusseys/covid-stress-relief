import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Recommendation } from "../helpers/types"
import { RecommendationItem } from "../components/quizz/Recommendations"
import { Link } from "gatsby-plugin-intl"
import Sticky from "../components/Sticky"
import Share from "../components/Share"
import { Button } from "../components/buttons"
import axios from "axios"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: auto;
`

const ENDPOINT = "https://t64zrlz3ci.execute-api.eu-west-3.amazonaws.com/prod"

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Field = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  font-weight: 600;
  input,
  select {
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }
`

const ROLES = [
  { name: "", label: "" },
  { name: "ceo", label: "CEO / Président" },
  { name: "hr", label: "Ressources Humaines" },
  { name: "officeManager", label: "Office Manager" },
  { name: "otherManager", label: "Autre (manager)" },
  { name: "other", label: "Autre (employé)" },
  { name: "otherIndependent", label: "Autre (indépendant)" },
  { name: "unemployed", label: "Autre / sans emploi" },
]

const Form = ({ onComplete }: { onComplete: () => void }) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState<string>()
  const [name, setName] = useState<string>()
  const [company, setCompany] = useState<string>()
  const [role, setRole] = useState<string>(ROLES[0].name)
  return (
    <FormContainer
      onSubmit={async e => {
        e.preventDefault()
        setLoading(true)
        try {
          await axios.post(
            ENDPOINT,
            JSON.stringify({ email, name, company, role }),
            { headers: { "content-type": "application/json" } }
          )
        } catch (e) {
          // do nothing for now
        }
        onComplete()
      }}
    >
      <Field>
        <span>
          Email <span style={{ color: "red" }}>*</span>
        </span>
        <input
          type="email"
          value={email || ""}
          required
          onChange={e => setEmail(e.target.value)}
        />
      </Field>
      <Field>
        Nom et Prénom (optionnel)
        <input value={name || ""} onChange={e => setName(e.target.value)} />
      </Field>
      <Field>
        Nom de l'entreprise (optionnel)
        <input
          value={company || ""}
          onChange={e => setCompany(e.target.value)}
        />
      </Field>
      <Field>
        Rôle dans l'entreprise (optionnel){" "}
        <select value={role} onChange={e => setRole(e.target.value)}>
          {ROLES.map(({ name, label }) => (
            <option key={name} value={name}>
              {label}
            </option>
          ))}
        </select>
      </Field>
      <Button
        disabled={loading}
        aspect="primary"
        style={{ alignSelf: "flex-end" }}
      >
        Obtenir plus d'informations
      </Button>
    </FormContainer>
  )
}

const Thanks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Companies = () => {
  const [submitted, setSubmitted] = useState(false)
  return (
    <Layout>
      <SEO title="Pour les entreprises" />
      <Container>
        <h1 style={{ marginBottom: 32 }}>Pour les entreprises</h1>
        <p>
          Nous développons également un outil dédié au bien-être de tous les
          employés 💕. Pour en savoir plus, contactez-nous via le formulaire
          ci-dessous !
        </p>
        <p style={{ marginBottom: 32 }}>
          Vos données ne seront utilisées que pour vous recontacter - rien
          d'autre.
        </p>
        {!submitted ? (
          <Form onComplete={() => setSubmitted(true)} />
        ) : (
          <Thanks>
            <h3>Merci ! Nous vous recontactons très vite.</h3>
            <p>Bon courage 💓</p>
          </Thanks>
        )}
      </Container>
    </Layout>
  )
}

export default Companies
