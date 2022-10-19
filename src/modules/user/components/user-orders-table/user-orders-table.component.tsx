import { GetCustomerOrdersQuery } from '@app/core/types';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { DateTime } from 'luxon';
import { FC } from 'react';

interface UserOrdersTableProps {
  data: GetCustomerOrdersQuery['orders'];
  orderStatus: any[];
}

const columnHelper = createColumnHelper<GetCustomerOrdersQuery['orders'][0]>();

export const UserOrdersTable: FC<UserOrdersTableProps> = ({
  data,
  orderStatus,
}) => {
  const columns = [
    columnHelper.accessor('created_at', {
      header: 'Дата',
      cell: (info) =>
        DateTime.fromISO(info.getValue())
          .setZone('Europe/Kiev')
          .toLocaleString(DateTime.DATETIME_SHORT),
    }),
    columnHelper.accessor('order_items', {
      header: 'Опис',
      cell: (info) =>
        info
          .getValue()
          .map((orderItem) => `${orderItem.item?.title} x ${orderItem.amount}`)
          .join(', '),
    }),
    columnHelper.accessor('status', {
      header: 'Статус',
      cell: (info) =>
        orderStatus.find((st) => st.id === info.getValue())?.label,
    }),
    columnHelper.accessor('sum', {
      header: 'Сума',
      cell: (info) => `${info.getValue()} грн.`,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-full">
      <thead className="bg-gray-50 border-t border-b border-gray-200 text-gray-900">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="font-semibold py-2 px-6 text-left">
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="bg-white text-gray-900 text-sm">
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="border-b border-gray-200">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="py-2 px-6">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
