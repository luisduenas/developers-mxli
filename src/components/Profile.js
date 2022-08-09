import React from "react"
import styled from "styled-components"

const ProfilePicture = styled.div`
  height: 250px;
  background-color: aliceblue;

  @media (max-width: 800px) {
    height: 200px;
  }

  @media (max-width: 600px) {
    height: 150px;
  }
`

const ProfileCard = styled.div`
  line-height: 1.75;

  ul {
    list-style-type: none;
  }
`

const Profile = props => {
  const { firstName, lastName, github, skills, employed } = props
  return (
    <ProfileCard>
      <ProfilePicture />
      <h2>{`${firstName} ${lastName}`}</h2>
      <ul>
        <li>
          <span>
            Github: <a href={`https://github.com/${github}`}>{`@${github}`}</a>
          </span>
        </li>
        <li>
          <span>Status: {employed ? "employed" : "unemployed"}</span>
        </li>
        <li>
          <span>
            Skills: {skills.map(skill => skill.toLowerCase()).join(", ")}
          </span>
        </li>
      </ul>
    </ProfileCard>
  )
}

export default Profile
