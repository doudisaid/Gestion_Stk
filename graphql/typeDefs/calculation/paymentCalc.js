const { gql } = require('apollo-server-express');

// Define the GraphQL schema
module.exports =  gql`
  type Query {
    # Calculate total_pay by four_id
    getTotalPayByFourId(four_id: ID!): Float

    # Calculate overall total_pay
    getTotalPay: Float

    # Calculate total_pay by pay_date
    getTotalPayByPayDate(pay_date: String!): Float
  }
`;

