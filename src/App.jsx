import React from "react"
import { ListOfCategories } from "./components/ListOfCategories"
import { GlobalStyles } from "./style/GlobalStyles"
import { ListOfPhotoCards } from "./components/ListOfPhotoCards"
import { Logo } from "./components/Logo"
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery"
const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get("detail")

  return (
    <>
      <GlobalStyles />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={1} />
        </>
      )}
    </>
  )
}

export default App
