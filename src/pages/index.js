import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProfileList from "../components/ProfileList"
import { Seo } from "../components/Seo"
import useEmploymentStatus from "../hooks/useEmploymentStatus"

export default function Home() {
  const [employmentStatus, setEmploymentStatus] = useEmploymentStatus()

  return (
    <Seo>
      <Header
        employmentStatus={employmentStatus}
        setEmploymentStatus={setEmploymentStatus}
      />
      <ProfileList employmentStatus={employmentStatus} />
      <Footer />
    </Seo>
  )
}
