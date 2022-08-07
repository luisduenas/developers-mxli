import { useEffect, useState } from "react"
import people from "../components/people.json"

const useProfiles = () => {
  const [name, setName] = useState("")
  const [employmentStatus, setEmploymentStatus] = useState("all")
  const [profiles, updateProfiles] = useState(people)

  useEffect(() => {
    if (!name || name.length === 0 || name === "") {
      if (employmentStatus === "all") {
        updateProfiles(people)
      }

      if (employmentStatus === "unemployed") {
        updateProfiles(people.filter(profile => !profile.employed))
      }

      if (employmentStatus === "employed") {
        updateProfiles(people.filter(profile => profile.employed))
      }
    } else {
      if (employmentStatus === "all") {
        updateProfiles(
          people.filter(
            profile =>
              profile.firstName.includes(name) ||
              profile.lastName.includes(name)
          )
        )
      }

      if (employmentStatus === "unemployed") {
        updateProfiles(
          people.filter(
            profile =>
              (profile.firstName.includes(name) ||
                profile.lastName.includes(name)) &&
              !profile.employed
          )
        )
      }

      if (employmentStatus === "employed") {
        updateProfiles(
          people.filter(
            profile =>
              (profile.firstName.includes(name) ||
                profile.lastName.includes(name)) &&
              profile.employed
          )
        )
      }
    }
  }, [name, employmentStatus])

  return [employmentStatus, setEmploymentStatus, name, setName, profiles]
}

export default useProfiles
