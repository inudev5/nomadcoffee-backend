import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createAccount(
      username: String!
      name: String!
      email: String!
      password: String!
      avatarURL: String
      githubUsername: String
      location: String
    ): MutationResponse!
  }
`;
