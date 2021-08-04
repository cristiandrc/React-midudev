import React from "react"
import { PhotoCard } from "../PhotoCard"
import { useGetPhotos } from "../../hooks/useGetPhotos"

export const ListOfPhotoCards = ({ categoryId }) => {
  const [loading, error, data] = useGetPhotos(categoryId)

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
