import { Customers, useGetCustomerDataQuery } from '@app/core/types';

export const useGetMeDataQuery = () => {
  const { loading, data } = useGetCustomerDataQuery();

  let modifiedData: Customers | undefined;
  if (data) {
    modifiedData = data.customers[0];
  }

  return { loading, data: modifiedData };
};
