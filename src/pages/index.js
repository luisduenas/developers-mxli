import React from "react"
import Profile from "../components/Profile"
import people from "../components/people.json"
import { ProfileList } from "../components/ProfileList"
import EmploymentStatusFilter from "../components/EmploymentStatusFilter"

export default function Home() {
  return (
    <>
      <EmploymentStatusFilter />
      <ProfileList>
        {people.map(profile => (
          <Profile key={profile.id} {...profile} />
        ))}
      </ProfileList>
    </>
  )
}
