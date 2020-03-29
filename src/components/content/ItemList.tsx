import styled from "styled-components"

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -16px;
  & > * {
    margin: 16px;
  }
`

export default ItemList
