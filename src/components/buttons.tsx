import styled, { css } from "styled-components"

type ButtonType = "primary" | "secondary" | "plain"

export const Button = styled.button<{ aspect?: ButtonType }>`
  padding: 8px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  white-space: nowrap;
  background: transparent;
  cursor: pointer;
  box-shadow: rgba(19, 45, 74, 0.12) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.2) 0px 2px 4px -2px;
  font-size: inherit;
  text-decoration: none;

  ${({ aspect, theme }) => {
    switch (aspect ?? "secondary") {
      case "primary":
        return css`
          background: ${theme.colors.primary};
          color: white;
        `
      case "secondary":
        return css`
          background: white;
        `
      case "plain":
        return css`
          color: ${theme.colors.secondary70};
          box-shadow: none;
          padding-left: 0;
          padding-right: 0;
        `
      default:
        throw new Error("unknown aspect")
    }
  }}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
      cursor: not-allowed;
    `}

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.8);
  }
`
