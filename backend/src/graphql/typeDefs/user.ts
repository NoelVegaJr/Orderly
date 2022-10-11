import { gql } from 'apollo-server-core';

export const userTypeDef = gql`
  type SearchedUser {
    id: String
    username: String
    image: String
  }

  type Query {
    searchUsers(searchedUsername: String!): [SearchedUser]
  }

  type Mutation {
    createUsername(username: String): CreateUsernameResponse!
  }

  type CreateUsernameResponse {
    success: Boolean
    error: String
  }
`;

export default userTypeDef;
