import React, { ReactNode } from "react"

const OutLink = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default OutLink
