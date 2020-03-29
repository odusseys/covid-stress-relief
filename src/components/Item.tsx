import styled, { css } from "styled-components"

const Item = styled.div<{ small?: boolean; hoverable?: boolean }>`
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: white;
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
  ${({ hoverable, theme }) =>
    hoverable &&
    css`
      cursor: pointer;
      &:hover {
        background: ${theme.colors.secondary3};
      }
    `}
`
export default Item
