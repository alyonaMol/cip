export const WIKI_URL = 'http://bit.ly/3EbroYK';

export const API_URL =
  (window as any)?.env?.API_URL?.replace(/\/+$/, '') || 'https://cip-api-production.up.railway.app';

export const GRAPHQL_URL = (window as any)?.env?.GRAPHQL_URL || `${API_URL}/graphql`;

export const API_ENDPOINTS = {
  health: '/health',
  main: '/',
  user: '/user',
  login: '/auth/login',
  public: '/clients/public',
  clients: '/clients',
  event: '/event',
  events: '/events',
  emails: '/clients/email',
  visits: '/visits',
  analytics: '/analytics',
  payments: '/payments',
  products: '/products',
  memberships: '/memberships',
  getClients: '/getClients',
  getClient: '/getClient',
};

export const dateFormat = 'd MMM, y';
