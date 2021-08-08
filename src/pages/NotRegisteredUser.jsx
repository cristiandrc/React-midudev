import React from "react"
import Context from "../Context"
import { UserForm } from "../components/UserForm"
import { useRegisterMutation } from "../hooks/useRegisterMutation"
export const NotRegisteredUser = () => {
  const { mutation } = useRegisterMutation()
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          const input = { email, password }
          const variables = { input }
          mutation({ variables }).then(activateAuth)
        }

        return (
          <>
            <UserForm onSubmit={onSubmit} title="Registrarte" />
            <UserForm onSubmit={activateAuth} title="Iniciar Sesión" />
          </>
        )
      }}
    </Context.Consumer>
  )
}
