const { gql } = require("apollo-server-express");

module.exports = gql`
  type Customer {
    cust_id: Int!
    cust_name: String!
    cust_phone: String

  }

  type Query {
    getCustomers: [Customer]
    getCustomer(cust_id: Int!): Customer
  }

  input CreateCustomerInput {
    cust_name: String!
    cust_phone: String
  }
  input UpdateCustomerInput {
    cust_id: Int!
    cust_name: String!
    cust_phone: String
}

  type Mutation {
    createCustomer(input: CreateCustomerInput): Customer
    updateCustomer(input: UpdateCustomerInput!): Customer!
    deleteCustomer(cust_id: Int!): String
  }
`;
