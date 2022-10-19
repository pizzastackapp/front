import { FrontCustomer } from '@app/modules/user/types/user';

export interface UpdateInfoProps {
  initialValues?: FrontCustomer;
  onSubmitCallback?: (values: UpdateInfoFormValues) => Promise<void>;
  isUpdating?: boolean;
  isLoading?: boolean;
}

export interface UpdateInfoFormValues {
  phoneNumber: string;
  name: string;
  address: string;
}
