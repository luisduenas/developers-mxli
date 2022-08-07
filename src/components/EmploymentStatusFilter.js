import React, { useState } from "react"
import styled from "styled-components"

const EmploymentStatusFilterContainer = styled.div`
  height: 50px;
  display: flex;
  margin-bottom: 35px;
  align-items: center;

  h1 {
    margin-right: 15px;
  }
`

const StatusPill = styled.div`
  font-size: 1.2rem;
  margin-right: 20px;
  padding: 10px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  &.active {
    border: none;
    color: white;
    background-color: blue;
  }
`

const EmploymentStatusFilter = () => {
  const [isWorking, setIsWorking] = useState(false)
  const [isNotWorking, setIsNotWorking] = useState(false)

  return (
    <EmploymentStatusFilterContainer>
      <h1>Status:</h1>
      <StatusPill
        onClick={() => setIsWorking(!isWorking)}
        className={isWorking ? "active" : null}
      >
        Working
      </StatusPill>
      <StatusPill
        onClick={() => setIsNotWorking(!isNotWorking)}
        className={isNotWorking ? "active" : null}
      >
        Not working
      </StatusPill>
    </EmploymentStatusFilterContainer>
  )
}

export default EmploymentStatusFilter
