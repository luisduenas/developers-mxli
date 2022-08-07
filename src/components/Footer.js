import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const FooterContainer = styled.div`
  height: 50px;
  margin: 2.5em auto;
  border-top: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          twitter
        }
      }
    }
  `)

  const { author, twitter } = data.site.siteMetadata
  return (
    <FooterContainer>
      <p>
        Created by {author}
        {` / `}
        <span>
          <a href={`https://twitter.com/${twitter}`}>{twitter}</a>
        </span>
      </p>
    </FooterContainer>
  )
}

export default Footer
