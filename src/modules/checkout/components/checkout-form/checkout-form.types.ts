import { FrontCustomer } from '@app/modules/user/types/user';

export interface CheckoutFormProps {
  submitCallback?: (values: CheckoutFormValues) => Promise<void>;
  initialValues?: FrontCustomer;
}

export interface CheckoutFormValues {
  name: string;
  phoneNumber: string;
  address: string;
  comment?: string;
  paymentType: string;
}

export interface UseCheckoutFormOptions {
  callback?: (values: CheckoutFormValues) => Promise<void>;
}
