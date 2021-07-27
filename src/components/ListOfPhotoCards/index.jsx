import React from "react"
import { PhotoCard } from "../PhotoCard"

export const ListOfPhotoCards = () => (
  <ul>
    {new Array(10).fill(1).map((a, i) => (
      <PhotoCard key={i} id={i} />
    ))}
  </ul>
)
