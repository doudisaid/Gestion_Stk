const { gql } = require('apollo-server-express');

module.exports = gql`
 type Versement {
    vers_id: Int!
    vers_date: String!
    amountcust: Float!
    customer: Customer!
    user: User!
}


  extend type Query {
    getVersements: [Versement]
    getVersement(vers_id: Int!): Versement
  }

  input CreateVersementInput {
    vers_date: String!
    amountcust: Float!
    cust_id: Int!
    user_id: Int!
    
  }
  input UpdateVersementInput {
    vers_id: Int!
    vers_date: String!
    amountcust: Float!
    cust_id: Int! 
    user_id: Int! 
  }

  extend type Mutation {
    createVersement(input: CreateVersementInput): Versement
    updateVersement(input: UpdateVersementInput): Versement
    deleteVersement(vers_id: Int!): String
  }
`;
