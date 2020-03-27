import styled from "styled-components"
import React from "react"

const Container = styled.a`
  display: flex;
  align-items: center;
  img {
    max-height: 40px;
    margin-right: 16px;
  }
`
export default function AppListing({
  image,
  name,
  href,
}: {
  image: string
  href: string
  name: string
}) {
  return (
    <Container href={href} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={name} />
      <div>{name}</div>
    </Container>
  )
}
