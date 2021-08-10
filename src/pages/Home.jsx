import React from "react"
import { Helmet } from "react-helmet"

import { ListOfCategories } from "../components/ListOfCategories"
import { ListOfPhotoCards } from "../components/ListOfPhotoCards"

export const Home = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Tu app de fotos de mascota | PetGram</title>
        <meta
          name="description"
          name="Con Petgrand puedes encontrar fotos de animales domesticos muy bonitos"
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}
