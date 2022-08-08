import { useEffect, useState } from "react"
import people from "../components/people.json"

const useProfiles = () => {
  const [name, setName] = useState("")
  const [employmentStatus, setEmploymentStatus] = useState("all")
  const [profiles, updateProfiles] = useState(people)

  useEffect(() => {
    let filteredResults = []
    if (name.length < 1) {
      filteredResults = people.filter(profile => {
        switch (employmentStatus) {
          case "employed":
            return profile.employed
          case "unemployed":
            return !profile.employed
          default:
            return profile
        }
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

        switch (employmentStatus) {
          case "employed":
            return profile.employed && filteredProfile
          case "unemployed":
            return !profile.employed && filteredProfile
          default:
            return filteredProfile
        }
      })
    }

    updateProfiles(filteredResults)
  }, [name, employmentStatus])

  return [employmentStatus, setEmploymentStatus, name, setName, profiles]
}

export default useProfiles
