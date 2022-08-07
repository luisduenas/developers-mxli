import React from "react"
import Profile from "../components/Profile"
import people from "../components/people.json"
import styled from "styled-components"

const ProfileList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

export default function Home() {
  return (
    <ProfileList>
      {people.map(profile => (
        <Profile
          key={profile.id}
          firstName={profile.first_name}
          lastName={profile.last_name}
          email={profile.email}
          github={profile.github}
          isWorking={profile.isWorking}
        />
      ))}
    </ProfileList>
  )
}
