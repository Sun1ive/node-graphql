import express from 'express';
import graphqlMiddleware from 'express-graphql';

import schema from './schema';
import resolvers from './resolvers';

const api = express();

api.all(
  '/graphql',
  graphqlMiddleware({
    schema,
    rootValue: resolvers,
    graphiql: true,
  }),
);

export default api;