import React from 'react';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {Life, LifeData} from '@/constants/LifeData';

const columnHelper = createColumnHelper<Life>();

const columns = [
  columnHelper.accessor('year', {
    header: '年',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('month', {
    header: '月',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('age', {
    header: '歳',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('description', {
    header: '学歴',
    cell: (info) => info.getValue(),
  }),
];

const LifeTable: React.FC = () => {
  const table = useReactTable({
    data: LifeData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mt-8 w-full max-w-4xl px-4">
      <table className="min-w-full border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="bg-gray-900" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="border px-4 py-2 text-left" key={header.id}>
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
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr className="hover:bg-gray-800" key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="border px-4 py-2" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LifeTable;
