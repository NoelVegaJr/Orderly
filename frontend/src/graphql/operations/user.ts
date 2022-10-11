import { gql } from '@apollo/client';

export default {
  Queries: {
    searchUsers: gql`
      query SearchUsers($searchedUsername: String!) {
        searchUsers(searchedUsername: $searchedUsername) {
          id
          username
          image
        }
      }
    `,
  },
  Mutation: {
    createUsername: gql`
      mutation CreateUsername($username: String) {
        createUsername(username: $username) {
          success
          error
        }
      }
    `,
  },
  Subscriptions: {},
};
