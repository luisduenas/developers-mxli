import React from "react"
import Profile from "../components/Profile"
import people from "../components/people.json"
import { ProfileList } from "../components/ProfileList"

export default function Home() {
  return (
    <ProfileList>
      {people.map(profile => (
        <Profile
          key={profile.id}
          id={profile.id}
          firstName={profile.first_name}
          lastName={profile.last_name}
          email={profile.email}
          github={profile.github}
          isWorking={profile.isWorking}
          skills={profile.skills}
        />
      ))}
    </ProfileList>
  )
}
