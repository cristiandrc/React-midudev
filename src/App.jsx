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
      <ListOfPhotoCards />
    </>
  )
}

export default App
