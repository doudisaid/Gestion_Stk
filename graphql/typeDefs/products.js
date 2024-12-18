const { gql } = require("apollo-server-express");

module.exports = gql`
  type Product {
    prod_id: Int!
    prod_name: String!
    prod_price: Float
    prod_unit: String
    prod_barcode: String
    achats: [Achat]!
  }

  type Query {
    getProducts: [Product]
    getProduct(prod_id: Int!): Product
  }

  input CreateProductInput {
    prod_name: String!
    prod_price: Float
    prod_unit: String
    prod_barcode: String
  }
  input UpdateProductInput {
    prod_id: Int!
    prod_name: String!
    prod_price: Float
    prod_unit: String
    prod_barcode: String
}

  type Mutation {
    createProduct(input: CreateProductInput): Product
    updateProduct(input: UpdateProductInput!): Product!
    deleteProduct(prod_id: Int!): String
  }
`;
