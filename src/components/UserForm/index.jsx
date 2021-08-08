import React from "react"
import { Link } from "@reach/router"
import { useInputValue } from "../../hooks/useInputValue"
import { Form, Input, Button, Title, P } from "./styles"

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue("")
  const password = useInputValue("")

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
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
      <P>
        ¿No estas registrado? <Link to="./">Registrate</Link>
      </P>
    </>
  )
}
