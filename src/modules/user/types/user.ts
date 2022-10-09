import { Customers } from '@app/core/types';

export type FrontCustomer = Pick<
  Customers,
  'address' | 'id' | 'name' | 'phone'
>;
