import React from "react"
import { useInputValue } from "../../hooks/useInputValue"
import { Form, Input, Button, Title, Error } from "./styles"

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue("")
  const password = useInputValue("")

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }
  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        {/*se usa el operator {...email} o el email.value  al tener el mismo nombre se puede pasar con el operator {...}*/}
        <Input disabled={disabled} placeholder="Email" {...email} />{" "}
        <Input
          disabled={disabled}
          placeholder="Password"
          type="password"
          value={password.value}
          onChange={password.onChange}
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
