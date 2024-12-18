const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    user_id: Int!
    user_email: String!
    user_phone: String!
    user_pass: String!
    achats: [Achat]
  }

  type Query {
    getUsers: [User]
    getUser(user_id: Int!): User
  }

  input CreateUserInput {
    user_email: String!
    user_phone: String!
    user_pass: String!
  }
  input UpdateUserInput {
    user_id: Int!
    user_email: String!
    user_phone: String!
    user_pass: String!
}

  type Mutation {
    createUser(input: CreateUserInput): User
    updateUser(input: UpdateUserInput!): User!
    deleteUser(user_id: Int!): String
  }
`;
