import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProfileList from "../components/ProfileList"
import { Seo } from "../components/Seo"
import useProfiles from "../hooks/useProfiles"

export default function Home() {
  const { employmentStatus, setEmploymentStatus, profiles } =
    useProfiles(employmentStatus)

  return (
    <Seo>
      <Header
        employmentStatus={employmentStatus}
        setEmploymentStatus={setEmploymentStatus}
      />
      <ProfileList profiles={profiles} />
      <Footer />
    </Seo>
  )
}
