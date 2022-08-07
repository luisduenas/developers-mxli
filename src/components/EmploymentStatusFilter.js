import React from "react"
import styled from "styled-components"

const EmploymentStatusFilterContainer = styled.div`
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

const StatusLabel = styled.span`
  font-size: 1.2rem;
  margin-right: 10px;
`

const EmploymentStatusFilter = ({ employmentStatus, setEmploymentStatus }) => {
  const handleChange = event => {
    setEmploymentStatus(event.target.value)
  }

  return (
    <EmploymentStatusFilterContainer>
      <StatusLabel>Status:</StatusLabel>
      <select value={employmentStatus} onChange={handleChange}>
        <option value="all">All</option>
        <option value="employed">Employed</option>
        <option value="unemployed">Unemployed</option>
      </select>
    </EmploymentStatusFilterContainer>
  )
}

export default EmploymentStatusFilter
