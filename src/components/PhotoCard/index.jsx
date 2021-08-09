import React, { Fragment } from "react"
import { Link } from "@reach/router"
import { Img, ImgWrapper, Article } from "./styles"
import { useNearScreen } from "../../hooks/useNearScreen"
import { FavButton } from "../FavButton"
import { useToggleLikeMutation } from "../../hooks/useToggleLikeMutation"
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const { mutation } = useToggleLikeMutation()

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id },
      },
    })
  }
  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="img" />
            </ImgWrapper>
          </Link>{" "}
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </Fragment>
      )}
    </Article>
  )
}
