import React from "react"
import Profile from "../components/Profile"
import Footer from "../components/Footer"
import people from "../components/people.json"
import { ProfileList } from "../components/ProfileList"
import EmploymentStatusFilter from "../components/EmploymentStatusFilter"
import { SEO } from "../components/SEO"

function getEmploymentStatus(isWorking) {
  return isWorking
}

export default function Home() {
  const isWorking = getEmploymentStatus() ?? false
  return (
    <SEO>
      <EmploymentStatusFilter getEmploymentStatus={getEmploymentStatus} />
      <ProfileList>
        {!isWorking
          ? people
              .filter(profile => !profile.isWorking)
              .map(profile => <Profile key={profile.id} {...profile} />)
          : people.map(profile => <Profile key={profile.id} {...profile} />)}
      </ProfileList>
      <Footer />
    </SEO>
  )
}
