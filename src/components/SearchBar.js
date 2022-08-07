import React from "react"
import { Label } from "./Label"
import styled from "styled-components"

const SearchBarContainer = styled.div`
  margin-right: 25px;
`

const SearchBarInput = styled.input`
  height: 25px;
`

const SearchBar = ({ name, setName }) => {
  const handleChange = event => {
    setName(event.target.value)
  }

  return (
    <SearchBarContainer>
      <Label>B&uacute;squeda:</Label>
      <SearchBarInput value={name} onChange={handleChange} />
    </SearchBarContainer>
  )
}

export default SearchBar
