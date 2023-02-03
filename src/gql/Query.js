import { gql } from '@apollo/client'

export const GET_POSTS = gql`
  {
    allPosts {
      id
      channelName
      caption
      videoUrl
      musicName
    }
  }
`
