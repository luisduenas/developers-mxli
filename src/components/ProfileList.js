import React from "react"
import Profile from "./Profile"
import NoResults from "./NoResults"
import styled from "styled-components"

const ProfileListContainer = styled.div`
  min-height: 70vh;
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

const ProfileList = ({ profiles }) => {
  if (profiles.length === 0) {
    return (
      <NoResults>
        <h1>There is no results for your search. Try again !</h1>
      </NoResults>
    )
  }

  return (
    <ProfileListContainer>
      {profiles.map(profile => (
        <Profile key={profile.id} {...profile} />
      ))}
    </ProfileListContainer>
  )
}

export default ProfileList
