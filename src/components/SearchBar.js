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
      <Label>Search:</Label>
      <SearchBarInput
        value={name}
        onChange={handleChange}
        placeholder={"Introduce a profile name or skill..."}
      />
    </SearchBarContainer>
  )
}

export default SearchBar
