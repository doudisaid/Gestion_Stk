const { gql } = require('apollo-server-express');

module.exports = gql`
 type Achat {
    achat_id: Int!
    achat_date: String!
    four: Four
    user: User
    products: [Product]! # الربط
}


  extend type Query {
    getAchats: [Achat]
    getAchat(achat_id: Int!): Achat
  }

  input CreateAchatInput {
    achat_date: String!
    four_id: Int!
    user_id: Int!
    
  }
  input UpdateAchatInput {
    achat_id: Int!
    achat_date: String!
    four_id: Int! 
    user_id: Int! 
  }

  extend type Mutation {
    createAchat(input: CreateAchatInput): Achat
    updateAchat(input: UpdateAchatInput): Achat
    deleteAchat(achat_id: Int!): String
  }
`;
