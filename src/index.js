import React from "react"
import ReactDOM from "react-dom"
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client"
import Context from "./Context"
import { setContext } from "@apollo/client/link/context"
import { onError } from "@apollo/client/link/error"

import App from "./App.jsx"

const httpLink = createHttpLink({
  uri: "https://petgram-server-anthony-3vrjckvsb.vercel.app/graphql",
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem("token")
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: onError(({ networkError }) => {
    if (networkError && networkError.result.code === "invalid_token") {
      window.sessionStorage.removeItem("token")
      window.location.href = "/user"
    }
  }),
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
)
