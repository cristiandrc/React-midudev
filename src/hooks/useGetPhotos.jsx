import { useQuery, gql } from "@apollo/client"

const widthPhotos = gql`
  query getPhoto($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const useGetPhotos = (categoryId) => {
  const { loading, error, data } = useQuery(widthPhotos, {
    variables: { categoryId },
  })
  return [loading, error, data]
}
