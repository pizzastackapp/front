import { Skeleton } from '@app/common/components/skeleton/skeleton.component';
import { FC } from 'react';

interface UserOrdersTableLoadingProps {}

export const UserOrdersTableLoading: FC<UserOrdersTableLoadingProps> = () => {
  return (
    <table className="w-full">
      <thead className="bg-gray-50 border-t border-b border-gray-200 text-gray-900">
        <tr>
          <th className="font-semibold py-2 px-6 text-left">Дата</th>
          <th className="font-semibold py-2 px-6 text-left">Опис</th>
          <th className="font-semibold py-2 px-6 text-left">Статус</th>
          <th className="font-semibold py-2 px-6 text-left">Сума</th>
        </tr>
      </thead>
      <tbody className="bg-white text-gray-900 text-sm">
        <tr className="border-b border-gray-200">
          <td className="py-2 px-6">
            <Skeleton width={120} height={16} />
          </td>
          <td className="py-2 px-6">
            <Skeleton width={241} height={16} />
          </td>
          <td className="py-2 px-6">
            <Skeleton width={111} height={16} />
          </td>
          <td className="py-2 px-6">
            <Skeleton width={56} height={16} />
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-2 px-6">
            <Skeleton width={120} height={16} />
          </td>
          <td className="py-2 px-6">
            <Skeleton width={241} height={16} />
          </td>
          <td className="py-2 px-6">
            <Skeleton width={111} height={16} />
          </td>
          <td className="py-2 px-6">
            <Skeleton width={56} height={16} />
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-2 px-6">
            <Skeleton width={120} height={16} />
          </td>
          <td className="py-2 px-6">
            <Skeleton width={241} height={16} />
          </td>
          <td className="py-2 px-6">
            <Skeleton width={111} height={16} />
          </td>
          <td className="py-2 px-6">
            <Skeleton width={56} height={16} />
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-2 px-6">
            <Skeleton width={120} height={16} />
          </td>
          <td className="py-2 px-6">
            <Skeleton width={241} height={16} />
          </td>
          <td className="py-2 px-6">
            <Skeleton width={111} height={16} />
          </td>
          <td className="py-2 px-6">
            <Skeleton width={56} height={16} />
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-2 px-6">
            <Skeleton width={120} height={16} />
          </td>
          <td className="py-2 px-6">
            <Skeleton width={241} height={16} />
          </td>
          <td className="py-2 px-6">
            <Skeleton width={111} height={16} />
          </td>
          <td className="py-2 px-6">
            <Skeleton width={56} height={16} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
