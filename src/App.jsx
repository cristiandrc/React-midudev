import React from "react"
import { GlobalStyles } from "./style/GlobalStyles"
import { Logo } from "./components/Logo"
import { Home } from "./pages/Home"
import { Router } from "@reach/router"
import { Detail } from "./pages/Detail"
import { NavBar } from "./components/NavBar"
import { Fav } from "./pages/Fav"
import { User } from "./pages/User"
import { NotRegisteredUser } from "./pages/NotRegisteredUser"

const UserLogged = ({ children }) => {
  return children({ isAuth: true })
}

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
      <UserLogged>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Fav path="/fav" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/fav" />
              <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </UserLogged>
      <NavBar />
    </>
  )
}

export default App
