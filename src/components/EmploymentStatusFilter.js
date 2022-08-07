import React from "react"
import styled from "styled-components"

const EmploymentStatusFilterContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
  height: 100px;
  display: flex;
  margin-bottom: 35px;
  align-items: center;

  h2 {
    margin-right: 15px;
  }
`

const StatusLabel = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }

  &.active {
    color: white;
    background-color: blue;
  }
`

const StatusPill = styled.span`
  border: 1px solid black;
  font-size: 1.2rem;
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

const EmploymentStatusFilter = ({ isWorking, setIsWorking }) => {
  return (
    <EmploymentStatusFilterContainer>
      <StatusLabel>Status:</StatusLabel>
      <StatusPill
        onClick={() => setIsWorking(!isWorking)}
        className={!isWorking ? "active" : null}
      >
        {!isWorking ? "Unemployed" : "All"}
      </StatusPill>
    </EmploymentStatusFilterContainer>
  )
}

export default EmploymentStatusFilter
