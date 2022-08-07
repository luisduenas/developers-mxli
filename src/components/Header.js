import React from "react"
import EmploymentStatusFilter from "./EmploymentStatusFilter"
import SearchBar from "./SearchBar"
import styled from "styled-components"

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  height: 100px;
  display: flex;
  align-items: center;

  h2 {
    margin-right: 15px;
  }
`

const Header = ({ employmentStatus, setEmploymentStatus, name, setName }) => {
  return (
    <HeaderContainer>
      <SearchBar name={name} setName={setName} />
      <EmploymentStatusFilter
        employmentStatus={employmentStatus}
        setEmploymentStatus={setEmploymentStatus}
      />
    </HeaderContainer>
  )
}

export default Header
