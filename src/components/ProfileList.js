import React from "react"
import Profile from "./Profile"
import styled from "styled-components"
import people from "../components/people.json"

const ProfileListContainer = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ProfileList = ({ employmentStatus }) => {
  return (
    <ProfileListContainer>
      {!employmentStatus
        ? people
            .filter(profile => !profile.isWorking)
            .map(profile => <Profile key={profile.id} {...profile} />)
        : people.map(profile => <Profile key={profile.id} {...profile} />)}
    </ProfileListContainer>
  )
}

export default ProfileList
