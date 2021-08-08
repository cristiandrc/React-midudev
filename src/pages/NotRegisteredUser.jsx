import React from "react"
import Context from "../Context"
import { UserForm } from "../components/UserForm"
import { useRegisterMutation } from "../hooks/useRegisterMutation"
import { useLoginMutation } from "../hooks/useLoginMutation"

export const NotRegisteredUser = () => {
  const { mutation, mutationLoading, mutationError } = useRegisterMutation()
  const { loginMutation, loginMutationLoading, loginMutationError } =
    useLoginMutation()
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          const input = { email, password }
          const variables = { input }
          mutation({ variables }).then(activateAuth)
        }

        const loginSubmit = ({ email, password }) => {
          loginMutation({ variables: { input: { email, password } } }).then(
            activateAuth
          )
        }

        const errorMsgReg =
          mutationError && "El usaurio ya existe o hay algun error"

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
      }}
    </Context.Consumer>
  )
}
