import { gql, makeExecutableSchema } from "apollo-server-micro"
import { posts } from "./data"

const typeDefs = gql`
  type Query {
    posts: [Post!]!
    recentPosts(limit: Int = 3): [Post!]!
  }

  type Post {
    title: String!
    excerpt: String!
    url: String!
    hostname: String!
    image: String
    categories: [String!]
    createdAt: String!
  }
`

const resolvers = {
  Query: {
    posts() {
      return posts.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      })
    },

    recentPosts(_parent, args) {
      const orderedPosts = posts.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      })
      return orderedPosts.slice(0, args.limit)
    },
  },
}

export const schema = makeExecutableSchema({ typeDefs, resolvers })
