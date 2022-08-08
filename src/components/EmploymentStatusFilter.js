import React from "react"
import Label from "./Label"
import styled from "styled-components"

const EmploymentStatusSelect = styled.select`
  height: 25px;
`

const EmploymentStatusFilter = ({ employmentStatus, setEmploymentStatus }) => {
  const handleChange = event => {
    setEmploymentStatus(event.target.value)
  }

  return (
    <>
      <Label>Status:</Label>
      <EmploymentStatusSelect value={employmentStatus} onChange={handleChange}>
        <option value="all">All</option>
        <option value="employed">Employed</option>
        <option value="unemployed">Unemployed</option>
      </EmploymentStatusSelect>
    </>
  )
}

export default EmploymentStatusFilter
