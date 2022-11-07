import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { config } from '@app/core/config';

const httpLink = new HttpLink({ uri: config.hasuraEndpoint });

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('jwt');

  if (token) {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});
