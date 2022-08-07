import React from "react"
import Footer from "../components/Footer"
import ProfileList from "../components/ProfileList"
import EmploymentStatusFilter from "../components/EmploymentStatusFilter"
import { Seo } from "../components/Seo"

import useEmploymentStatus from "../hooks/useEmploymentStatus"

export default function Home() {
  const [employmentStatus, setEmploymentStatus] = useEmploymentStatus()

  return (
    <Seo>
      <EmploymentStatusFilter
        employmentStatus={employmentStatus}
        setEmploymentStatus={setEmploymentStatus}
      />
      <ProfileList employmentStatus={employmentStatus} />
      <Footer />
    </Seo>
  )
}
