/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useMemo } from "react";

interface TableTemplateProps<T> {
  defaultData: T[];
}

function getKeysOfGeneric<T extends object>(obj: T | undefined): (keyof T)[] {
  if (!obj) return [];
  return Object.keys(obj) as (keyof T)[];
}

export default function TableTemplate<T extends object>({
  defaultData,
}: TableTemplateProps<T>) {
  const columnHelper = createColumnHelper<T>();
  const genericKeys = getKeysOfGeneric(defaultData[0]);

  const columns = useMemo(
    () =>
      genericKeys.map((key) => {
        return columnHelper.accessor((row: T) => row[key], {
          id: key as string,
          cell: (info) => info.getValue(),
          header: () => key,
          footer: (info) => info.column.id,
        });
      }),
    [genericKeys, columnHelper]
  );

  const [data] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 p-2">
      <img src="/person.png" className="h-[300px]" />
      <table className="border-2 border-gray-900">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border-b-2 border-r-2 border-gray-900 px-4 py-2 px-2 py-4 text-4xl"
                >
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
        <tbody className="border-b-2 border-gray-900">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border-b-2 border-r-2 border-gray-900 px-2 py-4 text-2xl"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
