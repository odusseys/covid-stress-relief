import styled, { css } from "styled-components"

const Item = styled.div<{ small?: boolean }>`
  padding: ${({ small }) => (small ? "8px" : "16px")};
  border-radius: 8px;
  border: 1px solid #dfe1e5;
  h2 {
    font-weight: 600;
    margin-bottom: ${({ small }) => (small ? "8px" : "16px")};
  }
  p {
    margin-bottom: ${({ small }) => (small ? "4px" : "8px")};
  }

  ${({ small }) =>
    small &&
    css`
      max-width: 200px;
      @media (max-width: 600px) {
        max-width: initial;
      }
    `}
`
export default Item
