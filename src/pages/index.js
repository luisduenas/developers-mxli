import React, { useState, useEffect } from "react"
import Profile from "../components/Profile"
import people from "../components/people.json"
import { ProfileList } from "../components/ProfileList"
import EmploymentStatusFilter from "../components/EmploymentStatusFilter"

export default function Home() {
  const [isWorking, setIsWorking] = useState(false)

  useEffect(() => {
    console.log(isWorking)
  }, [isWorking])

  return (
    <>
      <EmploymentStatusFilter
        isWorking={isWorking}
        setIsWorking={setIsWorking}
      ></EmploymentStatusFilter>
      <ProfileList>
        {!isWorking
          ? people
              .filter(profile => !profile.isWorking)
              .map(profile => <Profile key={profile.id} {...profile} />)
          : people.map(profile => <Profile key={profile.id} {...profile} />)}
      </ProfileList>
    </>
  )
}
