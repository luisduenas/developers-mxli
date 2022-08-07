import React, { useState } from "react"
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

const StatusPill = styled.span`
  border: 1px solid black;
  font-size: 1.07rem;
  width: 150px;
  height: 30px;
  padding: 5px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  &.active {
    font-weight: bold;
    color: white;
    background-color: blue;
  }
`

const EmploymentStatusFilter = ({ getEmploymentStatus }) => {
  const [isWorking, setIsWorking] = useState(false)

  return (
    <EmploymentStatusFilterContainer>
      <StatusLabel>Status:</StatusLabel>
      <StatusPill
        onClick={() => {
          setIsWorking(!isWorking)
          getEmploymentStatus(isWorking)
        }}
        className={!isWorking ? "active" : null}
      >
        {!isWorking ? "Unemployed" : "All"}
      </StatusPill>
    </EmploymentStatusFilterContainer>
  )
}

export default EmploymentStatusFilter
