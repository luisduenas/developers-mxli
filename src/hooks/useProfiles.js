import { useEffect, useState } from "react"
import people from "../components/people.json"

const useProfiles = () => {
  const [name, setName] = useState("")
  const [employmentStatus, setEmploymentStatus] = useState("all")
  const [profiles, updateProfiles] = useState(people)

  useEffect(() => {
    let filteredResults = []
    if (name.length < 3) {
      if (employmentStatus === "all") {
        filteredResults = people
      } else if (employmentStatus === "unemployed") {
        filteredResults = people.filter(profile => !profile.employed)
      } else if (employmentStatus === "employed") {
        filteredResults = people.filter(profile => profile.employed)
      }
    } else {
      if (employmentStatus === "all") {
        filteredResults = people.filter(
          profile =>
            `${profile.firstName} ${profile.lastName}`
              .toLowerCase()
              .trim()
              .includes(name) ||
            profile.skills.join(" ").toLowerCase().trim().includes(name)
        )
      } else if (employmentStatus === "unemployed") {
        filteredResults = people.filter(
          profile =>
            (!profile.employed &&
              `${profile.firstName} ${profile.lastName}`
                .toLowerCase()
                .trim()
                .includes(name)) ||
            profile.skills.join(" ").toLowerCase().trim().includes(name)
        )
      } else if (employmentStatus === "employed") {
        filteredResults = people.filter(
          profile =>
            (profile.employed &&
              `${profile.firstName} ${profile.lastName}`
                .toLowerCase()
                .trim()
                .includes(name)) ||
            profile.skills.join(" ").toLowerCase().trim().includes(name)
        )
      }
    }

    updateProfiles(filteredResults)
  }, [name, employmentStatus])

  return [employmentStatus, setEmploymentStatus, name, setName, profiles]
}

export default useProfiles
