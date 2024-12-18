const { gql } = require('apollo-server-express');

module.exports = gql`
  type AchatProduct {
    achat_id: Int!
    prod_id: Int!
    quantity: Float
    achat: Achat
    product: Product
  }

  extend type Query {
    getAchatProducts: [AchatProduct]
    getAchatProductsByAchat(achat_id: Int!): [AchatProduct]
    getAchatProductsByProduct(prod_id: Int!): [AchatProduct]
  }

  input CreateAchatProductInput {
    achat_id: Int!
    prod_id: Int!
    quantity: Int!
  }

  input UpdateAchatProductInput {
    achat_id: Int!
    prod_id: Int!
    quantity: Int!
  }

  extend type Mutation {
    createAchatProduct(input: CreateAchatProductInput): AchatProduct
    updateAchatProduct(input: UpdateAchatProductInput): AchatProduct
    deleteAchatProduct(achat_id: Int!, prod_id: Int!): String
  }
`;

