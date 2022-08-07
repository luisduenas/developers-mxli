import { useReducer } from "react"

const useEmploymentStatus = () => {
  const [employmentStatus, setEmploymentStatus] = useReducer(
    employmentStatus => !employmentStatus,
    false
  )

  return [employmentStatus, setEmploymentStatus]
}

export default useEmploymentStatus
