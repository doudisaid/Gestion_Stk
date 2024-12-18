const { gql } = require("apollo-server-express");

module.exports = gql`
  type Four {
    four_id: Int!
    four_name: String!
    four_phone: String
    four_email: String
    achats: [Achat]
  }

  type Query {
    getFours: [Four]
    getFour(four_id: Int!): Four
  }

  input CreateFourInput {
    four_name: String!
    four_phone: String
    four_email: String
  }
  input UpdateFourInput {
    four_id: Int!
    four_name: String!
    four_phone: String
    four_email: String
  }

  type Mutation {
    createFour(input: CreateFourInput): Four
    updateFour(input: UpdateFourInput): Four! 
    deleteFour(four_id: Int!): String
  }
`;
