import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export const SEO = ({ title, children }) => {
  const { title: defaultTitle, author, twitter } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    author,
    twitter,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:creator" content={seo.twitter} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  )
}
