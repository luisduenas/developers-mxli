import { useEffect, useState } from "react"
import people from "../components/people.json"

const useProfiles = employmentStatus => {
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

  return [profiles]
}

export default useProfiles
