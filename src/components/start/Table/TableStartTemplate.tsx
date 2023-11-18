/* eslint-disable @next/next/no-img-element */
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
};

interface TableTemplateProps {
  defaultData: Person[];
}

export default function TableStartTemplate({
  defaultData,
}: TableTemplateProps) {
  const columnHelper = createColumnHelper<Person>();
  const columns = [
    columnHelper.accessor("firstName", {
      cell: (info) => info.getValue(),
      header: () => "First Name",
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: "lastName",
      cell: (info) => info.getValue(),
      header: () => <span>Last Name</span>,
    }),
    columnHelper.accessor("age", {
      id: 'age"',
      header: () => "Age",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("visits", {
      id: "visits",
      header: () => <span>Visits</span>,
    }),
  ];

  const [data] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 p-2">
      <span className="pb-10">
        Filename: <code>start/table.tsx</code> &&{" "}
        <code>TableStartTempalte.tsx</code>
      </span>
      <table className="border-2 border-gray-900">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border-b-2 border-r-2 border-gray-900 px-4 py-2 text-4xl"
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
