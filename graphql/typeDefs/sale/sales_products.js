const { gql } = require('apollo-server-express');

module.exports = gql`
  type SaleProduct {
    sale_id: Int!
    prod_id: Int!
    quantity: Float
    sale: Sale
    product: Product
  }

  extend type Query {
    getSaleProducts: [SaleProduct]
    getSaleProductsBySale(sale_id: Int!): [SaleProduct]
    getSaleProductsByProduct(prod_id: Int!): [SaleProduct]
  }

  input CreateSaleProductInput {
    sale_id: Int!
    prod_id: Int!
    quantity: Float!
  }

  input UpdateSaleProductInput {
    sale_id: Int!
    prod_id: Int!
    quantity: Float!
  }

  extend type Mutation {
    createSaleProduct(input: CreateSaleProductInput): SaleProduct
    updateSaleProduct(input: UpdateSaleProductInput): SaleProduct
    deleteSaleProduct(sale_id: Int!, prod_id: Int!): String
  }
`;

