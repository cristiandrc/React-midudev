import React, { useContext } from "react"
import { Redirect, Router } from "@reach/router"
import { GlobalStyles } from "./style/GlobalStyles"
import { Logo } from "./components/Logo"
import { Home } from "./pages/Home"
import { Detail } from "./pages/Detail"
import { NavBar } from "./components/NavBar"
import { Fav } from "./pages/Fav"
import { User } from "./pages/User"
import { NotRegisteredUser } from "./pages/NotRegisteredUser"
import { NotFound } from "./pages/NotFound"

import { Context } from "./Context"

const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search) // filtro del Search "/?detail=0"
  // const detailId = urlParams.get("detail")
  const { isAuth } = useContext(Context)
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/fav" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect noThrow from="/login" to="/" />}
        <Fav path="/fav" />
        <User path="/user" />
      </Router>
      <NavBar />
    </>
  )
}

export default App
