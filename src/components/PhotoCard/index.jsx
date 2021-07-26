import React, { Fragment, useEffect, useRef, useState } from "react"
import { Img, ImgWrapper, Button, Article } from "./styles"
import { MdFavoriteBorder } from "react-icons/md"

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, setShow] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        const { isIntersecting } = entries[0]
        console.log(isIntersecting)
        console.log(isIntersecting)
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      },
      { rootMargin: "50px" }
    )
    observer.observe(ref.current)
  }, [ref])

  return (
    <Article ref={ref}>
      {show && (
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="img" />
            </ImgWrapper>
          </a>
          <Button>
            {" "}
            <MdFavoriteBorder size="32px" /> {likes} Likes!
          </Button>
        </Fragment>
      )}
    </Article>
  )
}
