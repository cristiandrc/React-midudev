import { gql, useQuery } from "@apollo/client"

const FAV = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

export const useGetFavorites = () => {
  const { data, loading, error } = useQuery(FAV, {
    fetchPolicy: "cache-and-network",
  })

  return { data, loading, error }
}
