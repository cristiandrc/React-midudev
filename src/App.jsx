import React from "react"
import { ListOfCategories } from "./components/ListOfCategories"
import { GlobalStyles } from "./style/GlobalStyles"
import { ListOfPhotoCards } from "./components/ListOfPhotoCards"
import { Logo } from "./components/Logo"

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards categoryId={2} />
    </>
  )
}

export default App
