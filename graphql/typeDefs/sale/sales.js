const { gql } = require('apollo-server-express');

module.exports = gql`
 type Sale {
    sale_id: Int!
    sale_date: String!
    customer: Customer
    user: User
    products: [Product]! # الربط
}


  extend type Query {
    getSales: [Sale]
    getSale(sale_id: Int!): Sale
  }

  input CreateSaleInput {
    sale_date: String!
    cust_id: Int!
    user_id: Int!
    
  }
  input UpdateSaleInput {
    sale_id: Int!
    sale_date: String!
    cust_id: Int! 
    user_id: Int! 
  }

  extend type Mutation {
    createSale(input: CreateSaleInput): Sale
    updateSale(input: UpdateSaleInput): Sale
    deleteSale(sale_id: Int!): String
  }
`;
