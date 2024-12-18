const { gql } = require('apollo-server-express');

module.exports = gql`
 type Payment {
    pay_id: Int!
    pay_date: String!
    amount_pay: Float!
    four: Four!
    user: User!
}


  extend type Query {
    getPayments: [Payment]
    getPayment(pay_id: Int!): Payment
  }

  input CreatePaymentInput {
    pay_date: String!
    amount_pay: Float!
    four_id: Int!
    user_id: Int!
    
  }
  input UpdatePaymentInput {
    pay_id: Int!
    pay_date: String!
    amount_pay: Float!
    four_id: Int! 
    user_id: Int! 
  }

  extend type Mutation {
    createPayment(input: CreatePaymentInput): Payment
    updatePayment(input: UpdatePaymentInput): Payment
    deletePayment(pay_id: Int!): String
  }
`;
