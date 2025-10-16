import { DropDown } from '../models/types';

export const API_URL = 'https://api-modo-418554153a21.herokuapp.com';
export const WIKI_URL = 'http://bit.ly/3EbroYK';

export const API_ENDPOINTS = {
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

export const FF_AVATAR = false;
export const dateFormat = 'd MMM, y';

export enum RELATIVE {
  MOTHER = 'mother',
  FATHER = 'father',
  SISTER = 'sister',
  BROTHER = 'brother',
  GRANDMOTHER = 'grandmother',
  GRANDFATHER = 'grandfather',
  AUNT = 'aunt',
  UNCLE = 'uncle',
  GUARDIAN = 'guardian',
  OTHER = 'other',
  NOT_SPECIFIED = 'not specified',
}

export const Weekdays: string[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const Levels: string[] = [
  '10 KYU - White / yellow stripe',
  '9 KYU - Yellow',
  '8 KYU - Yellow / orange stripe',
  '7 KYU - Orange',
  '6 KYU - Orange / green stripe',
  '5 KYU - Green',
  '4 KYU - Green / blue stripe',
  '3 KYU - Blue',
  '2 KYU - Brown',
  '1 KYU - Brown / black stripe',
  '1 DAN - BLACK BELT',
];

// Dropdowns

export const GENDER = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Unspecified', value: 'unspecified' },
];

export const GUARDIAN = [
  { label: 'Mother', value: 'mother' },
  { label: 'Father', value: 'father' },
  { label: 'Guardian', value: 'guardian' },
];
export const TAXES = [{ value: 5, type: 'percent', label: 'GST' }];
export const currency = 'CAD';
export const STATUS = [
  { label: 'Active', value: 'active', severity: 'success' },
  { label: 'Pending', value: 'pending', severity: 'warn' },
  { label: 'Not Active', value: 'not active', severity: 'danger' },
  { label: 'Family member', value: 'family member', severity: 'info' },
];

export const PAYMENT_OPTIONS = [
  {
    key: 'eTransfer',
    name: 'E-Transfer',
    details: 'payment@championclub.ca',
  },
  {
    key: 'chequeCash',
    name: 'Cheque/Cash',
    details: '',
  },
];

export const Membership = [
  { value: 'DropIn', label: 'Drop in (1 time training)', price: 25.0, currency: 'CAD' },
  {
    value: 'OnePerWeek',
    label: '1 class per week for one student $100 + GST (per month)',
    price: 100.0,
    currency: 'CAD',
  },
  {
    value: 'TwoPerWeek',
    label: '2 classes per week for one student $180 + GST (per month)',
    price: 180.0,
    currency: 'CAD',
  },
  {
    value: 'Competitive',
    label: 'Competitive classes 3 per week for one student $280 + GST per month',
    price: 280.0,
    currency: 'CAD',
  },
];

export const Product = [
  {
    value: 'kimono',
    label: 'Kimono',
    price: 70.0,
    currency: 'CAD',
  },
];

export const provincesOfCanada = [
  { label: 'Alberta', value: 'AB' },
  { label: 'British Columbia', value: 'BC' },
  { label: 'Manitoba', value: 'MB' },
  { label: 'New Brunswick', value: 'NB' },
  { label: 'Newfoundland and Labrador', value: 'NL' },
  { label: 'Nova Scotia', value: 'NS' },
  { label: 'Ontario', value: 'ON' },
  { label: 'Prince Edward Island', value: 'PE' },
  { label: 'Quebec', value: 'QC' },
  { label: 'Saskatchewan', value: 'SK' },
];

export const colors: DropDown[] = [
  { label: 'Red', value: '#ff6f61' },
  { label: 'Green', value: '#51cda0' },
  { label: 'Blue', value: '#007ad9' },
  { label: 'Yellow', value: '#ffc107' },
  { label: 'Pink', value: '#FFC0CB' },
  { label: 'Brown', value: '#382f2f' },
  { label: 'Black', value: '#000000' },
  { label: 'White', value: '#FFFFFF' },
  { label: 'Gray', value: '#808080' },
];
