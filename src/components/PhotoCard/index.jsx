import React, { Fragment } from "react"
import { Link } from "@reach/router"
import { Img, ImgWrapper, Article } from "./styles"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { useNearScreen } from "../../hooks/useNearScreen"
import { FavButton } from "../FavButton"
import { useToggleLikeMutation } from "../../hooks/useToggleLikeMutation"
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()
  const { mutation, mutationLoading, mutationError } = useToggleLikeMutation()

  const handleFavClick = () => {
    !liked &&
      mutation({
        variables: {
          input: { id },
        },
      })
    setLiked(!liked)
  }
  // console.log("{ mutation, mutationLoading, mutationError }", {
  //   mutation,
  //   mutationLoading,
  //   mutationError,
  // })
  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <a href={`?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} alt="img" />
            </ImgWrapper>
          </a>{" "}
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </Fragment>
      )}
    </Article>
  )
}
