export interface CheckoutFormProps {}

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
