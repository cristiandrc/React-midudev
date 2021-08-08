import { gql, useMutation } from "@apollo/client"

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`
export const useLoginMutation = () => {
  const [
    loginMutation,
    { loading: loginMutationLoading, error: loginMutationError },
  ] = useMutation(LOGIN)

  return { loginMutation, loginMutationLoading, loginMutationError }
}
