const { gql } = require("apollo-server-express");

module.exports = gql`
  type Etab {
    etab_id: Int!
    etab_name: String!
    etab_fonc: String
    etab_phone: String
    etab_email: String
  }

  type Query {
    getEtabs: [Etab]
    getEtab(etab_id: Int!): Etab
  }

  input CreateEtabInput {
    etab_name: String!
    etab_fonc: String
    etab_phone: String
    etab_email: String
  }
  input UpdateEtabInput {
    etab_id: Int!
    etab_name: String!
    etab_fonc: String
    etab_phone: String
    etab_email: String
}

  type Mutation {
    createEtab(input: CreateEtabInput): Etab
    updateEtab(input: UpdateEtabInput!): Etab!
    deleteEtab(etab_id: Int!): String
  }
`;
