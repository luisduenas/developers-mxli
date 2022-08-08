import React from "react"
import Label from "./Label"
import styled from "styled-components"

const SearchBarContainer = styled.div`
  margin-right: 25px;
`

const SearchBarInput = styled.input`
  font-size: 1.2rem;
  height: 25px;
  min-width: 320px;
  border: none;

  @media (max-width: 800px) {
    min-width: 80px;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    min-width: 250px;
  }

  &:focus {
    outline: none;
    border: 1px solid blue;
  }
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
        placeholder={"Introduce a profile name or skill"}
      />
    </SearchBarContainer>
  )
}

export default SearchBar
