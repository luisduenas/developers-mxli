import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const FooterContainer = styled.div`
  height: 50px;
  margin: 2.5em auto;
  border-top: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = () => {
  const { author, twitter } = useSiteMetadata()
  return (
    <FooterContainer>
      <p>
        Created by {author}
        {` / `}
        <span>
          <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
        </span>
      </p>
    </FooterContainer>
  )
}

export default Footer
