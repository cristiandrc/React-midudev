import React from "react"
import { useInputValue } from "../../hooks/useInputValue"
import { Form, Input, Button, Title } from "./styles"

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue("")
  const password = useInputValue("")

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        {/*se usa el operator {...email} o el email.value  al tener el mismo nombre se puede pasar con el operator {...}*/}
        <Input placeholder="Email" {...email} />{" "}
        <Input
          placeholder="Password"
          type="password"
          value={password.value}
          onChange={password.onChange}
        />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
