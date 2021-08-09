import React from "react"
import { Link, Grid, Image } from "./styles"

export const ListOfFavs = ({ favs }) => {
  return (
    <Grid>
      {favs ? (
        favs.map((fav) => (
          <Link to={`/detail/${fav.id}`} key={fav.id}>
            <Image src={fav.src} />
          </Link>
        ))
      ) : (
        <h3>No tienes Favoritos</h3>
      )}
    </Grid>
  )
}
