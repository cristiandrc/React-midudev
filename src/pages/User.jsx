import React, { useContext } from "react"
import styled from "styled-components"
import { Context } from "../Context"

const Button = styled.button`
  background-color: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  margin: 0 auto;
  width: 90%;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`

const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h1>User</h1>
      <Button onClick={removeAuth}>Cerrar Sesión</Button>
    </>
  )
}

export default User
