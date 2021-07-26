import React from "react"
import { PhotoCard } from "../PhotoCard"
import { photos } from "../../../api/db.json"

console.log(photos)
export const ListOfPhotoCards = () => (
  <ul>
    {photos.map((photo) => (
      <PhotoCard key={photo.id} {...photo} />
    ))}
  </ul>
)
