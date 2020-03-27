import styled from "styled-components"

const Item = styled.div<{ small?: boolean }>`
  padding: ${({ small }) => (small ? "8px" : "16px")};
  border-radius: 8px;
  border: 1px solid #dfe1e5;
  h2 {
    font-size: ${({ small }) => (small ? "12px" : "13px")};
    font-weight: 600;
    margin-bottom: ${({ small }) => (small ? "8px" : "16px")};
  }
  p {
    margin-bottom: ${({ small }) => (small ? "4px" : "8px")};
  }
`
export default Item
