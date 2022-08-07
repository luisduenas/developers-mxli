import { useEffect, useState } from "react"
import people from "../components/people.json"

const useProfiles = () => {
  const [employmentStatus, setEmploymentStatus] = useState("")
  const [profiles, updateProfiles] = useState(people)

  useEffect(() => {
    if (employmentStatus === "all") {
      updateProfiles(people)
    }

    if (employmentStatus === "unemployed") {
      updateProfiles(people.filter(profile => !profile.employed))
    }

    if (employmentStatus === "employed") {
      updateProfiles(people.filter(profile => profile.employed))
    }
  }, [employmentStatus])

  return { employmentStatus, setEmploymentStatus, profiles }
}

export default useProfiles
