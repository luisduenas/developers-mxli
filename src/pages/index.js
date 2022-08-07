import React from "react"
import Footer from "../components/Footer"
import ProfileList from "../components/ProfileList"
import EmploymentStatusFilter from "../components/EmploymentStatusFilter"
import { SEO } from "../components/SEO"

export default function Home() {
  return (
    <SEO>
      <EmploymentStatusFilter />
      <ProfileList />
      <Footer />
    </SEO>
  )
}
