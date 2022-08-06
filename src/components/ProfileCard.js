import React from "react"

const ProfileCard = props => {
  const { firstName, lastName, email } = props

  return (
    <article>
      <h1>{`${firstName} ${lastName}`} </h1>
      <h2>{email}</h2>
    </article>
  )
}

export default ProfileCard
