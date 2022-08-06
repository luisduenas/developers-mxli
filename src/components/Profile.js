import React from "react"
import styled from "styled-components"

const ProfilePicture = styled.div`
  width: 250px;
  height: 250px;
  background-color: aliceblue;
`

const ProfileCard = styled.div`
  line-height: 1.75;
`

const Profile = props => {
  const { firstName, lastName, email } = props

  return (
    <ProfileCard>
      <ProfilePicture />
      <h2>{`${firstName} ${lastName}`}</h2>
      <h3>{email}</h3>
    </ProfileCard>
  )
}

export default Profile
