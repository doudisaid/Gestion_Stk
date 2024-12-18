const { gql } = require('apollo-server-express');

// Define the GraphQL schema
module.exports =  gql`
  type Query {
    # Calculate total_pay by four_id
    getTotalVersByCustId(cust_id: Int!): Float

    # Calculate overall total_pay
    getTotalVers: Float

    # Calculate total_pay by pay_date
    getTotalVersByversDate(vers_date: String!): Float
  }
`;

