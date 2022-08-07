import React from "react"
import styled from "styled-components"
import "./Profile.css"

const ProfilePicture = styled.div`
  width: 250px;
  height: 250px;
  background-color: aliceblue;
`

const ProfileCard = styled.div`
  line-height: 1.75;
`

const Profile = ({ firstName, lastName, email, github, isWorking, skills }) => {
  return (
    <ProfileCard>
      <ProfilePicture />
      <h2>{`${firstName} ${lastName}`}</h2>
      <h3>{email}</h3>
      <ul>
        <li>
          <span>
            Github: <a href="#">{`@${github}`}</a>
          </span>
        </li>
        <li>
          <span>
            Employment Status: {isWorking ? "Working" : "Not working"}
          </span>
        </li>
        <li>
          <span>Skills: {skills.join(", ")}</span>
        </li>
      </ul>
    </ProfileCard>
  )
}

export default Profile
