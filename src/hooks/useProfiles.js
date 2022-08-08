import { useEffect, useState } from "react"
import people from "../components/people.json"

const useProfiles = () => {
  const [name, setName] = useState("")
  const [employmentStatus, setEmploymentStatus] = useState("all")
  const [profiles, updateProfiles] = useState(people)

  useEffect(() => {
    let filteredResults = []
    if (name.length < 3) {
      filteredResults = people.filter(profile => {
        if (employmentStatus === "employed") return profile.employed
        if (employmentStatus === "unemployed") return !profile.employed
        return profile
      })
    } else {
      const criteria = name.toLowerCase().trim()

      filteredResults = people.filter(profile => {
        const filteredProfile =
          `${profile.firstName} ${profile.lastName}`
            .toLowerCase()
            .trim()
            .includes(criteria) ||
          profile.skills.join(" ").toLowerCase().trim().includes(criteria)

        if (employmentStatus === "employed")
          return filteredProfile && profile.employed
        if (employmentStatus === "unemployed")
          return filteredProfile && !profile.employed
        return filteredProfile
      })
    }

    updateProfiles(filteredResults)
  }, [name, employmentStatus])

  return [employmentStatus, setEmploymentStatus, name, setName, profiles]
}

export default useProfiles
