// index.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const app = express();
const {typeDefs, resolvers} = require('./graphql/index')



const server = new ApolloServer({ typeDefs, resolvers });
   server.start().then(() => {
    server.applyMiddleware({ app });

  app.listen({ port: 8080 }, () => {
    console.log(`Server ready at http://localhost:8080${server.graphqlPath}`);
  });
});