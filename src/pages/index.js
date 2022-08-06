import React from "react"
import ProfileCard from "../components/ProfileCard"
import people from "../components/people.json"

export default function Home() {
  return (
    <div>
      {people.map(profile => (
        <ProfileCard
          key={profile.id}
          firstName={profile.first_name}
          lastName={profile.last_name}
          email={profile.email}
        />
      ))}
    </div>
  )
}
