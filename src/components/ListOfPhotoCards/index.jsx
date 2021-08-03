import React from "react"
import { PhotoCard } from "../PhotoCard"
import { useQuery, gql } from "@apollo/client"

const widthPhotos = gql`
  query getPhoto {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(widthPhotos)
  if (loading) {
    return <h1>'Cargando...'</h1>
  }

  if (error) {
    return <h1>'Error'</h1>
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
