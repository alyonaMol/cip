import { Provider } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { GRAPHQL_URL } from '../config/constants';

export function createApollo(): ApolloClientOptions {
  const httpLink = createHttpLink({
    uri: GRAPHQL_URL,
    // credentials: 'include',
    // headers: { Authorization: `Bearer ${localStorage.getItem('cip_token') ?? ''}` },
  });

  return {
    link: httpLink,
    cache: new InMemoryCache(),
    // connectToDevTools: true,
  };
}

export const APOLLO_PROVIDER: Provider = {
  provide: APOLLO_OPTIONS,
  useFactory: createApollo,
};
