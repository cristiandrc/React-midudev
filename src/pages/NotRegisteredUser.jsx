import React, { useContext } from "react"
import { Context } from "../Context"
import { UserForm } from "../components/UserForm"
import { useRegisterMutation } from "../hooks/useRegisterMutation"
import { useLoginMutation } from "../hooks/useLoginMutation"

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  const { mutation, mutationLoading, mutationError } = useRegisterMutation()
  const { loginMutation, loginMutationLoading, loginMutationError } =
    useLoginMutation()

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    mutation({ variables }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }

  const loginSubmit = ({ email, password }) => {
    loginMutation({ variables: { input: { email, password } } }).then(
      ({ data }) => {
        const { login } = data
        activateAuth(login)
      }
    )
  }

  const errorMsgReg = mutationError && "El usaurio ya existe o hay algun error"

  const errorMsgLog =
    loginMutationError && "El usaurio o contraseña incorrecto "
  return (
    <>
      <UserForm
        disabled={mutationLoading}
        error={errorMsgReg}
        onSubmit={onSubmit}
        title="Registrarte"
      />
      <UserForm
        disabled={loginMutationLoading}
        error={errorMsgLog}
        onSubmit={loginSubmit}
        title="Iniciar Sesión"
      />
    </>
  )
}
