import { ApolloClient, InMemoryCache } from '@apollo/client';
import { config } from '@app/core/config';

export const apolloClient = new ApolloClient({
  uri: config.hasuraEndpoint,
  cache: new InMemoryCache(),
});
