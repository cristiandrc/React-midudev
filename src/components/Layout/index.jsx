import React from "react"
import { Helmet } from "react-helmet"
import { Div, Title, Subtitle } from "./styles"

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | PetGram</title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </div>
    </>
  )
}
