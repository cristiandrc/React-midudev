import React from "react"
import { useGetFavorites } from "../hooks/useGetFavorites"
import { ListOfFavs } from "../components/ListOfFavs"
import { Layout } from "../components/Layout"

const Fav = () => {
  const { data, loading, error } = useGetFavorites()
  if (error) {
    return <p>Error en los favoritos</p>
  }

  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <Layout
      title="Tus Favoritos"
      subtitle="Aqui puedes encontrar tus favoritos"
    >
      {data.favs ? <ListOfFavs {...data} /> : <h1>No tienes Favoritos</h1>}
    </Layout>
  )
}

export default Fav
