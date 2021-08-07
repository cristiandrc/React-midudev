import React from "react"
import { GlobalStyles } from "./style/GlobalStyles"
import { Logo } from "./components/Logo"
import { Home } from "./pages/Home"
import { Router } from "@reach/router"
import { Detail } from "./pages/Detail"
const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search) // filtro del Search "/?detail=0"
  // const detailId = urlParams.get("detail")

  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
    </>
  )
}

export default App
