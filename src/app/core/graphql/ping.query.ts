import { gql } from 'apollo-angular';

export const PING_QUERY = gql`
  query Ping {
    ping
  }
`;
