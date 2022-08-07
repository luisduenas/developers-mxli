import React from "react"
import Profile from "../components/Profile"
import people from "../components/people.json"
import { ProfileList } from "../components/ProfileList"

export default function Home() {
  return (
    <ProfileList>
      {people.map(profile => (
        <Profile key={profile.id} {...profile} />
      ))}
    </ProfileList>
  )
}
