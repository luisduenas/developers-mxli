import { useState } from "react"

const useEmploymentStatus = () => {
  const [employmentStatus, setEmploymentStatus] = useState("")

  return [employmentStatus, setEmploymentStatus]
}

export default useEmploymentStatus
