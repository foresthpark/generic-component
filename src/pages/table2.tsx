/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";

type Dessert = {
  name: string;
  calories: number;
  sweetness: number;
  popularity: number;
};

const defaultData: Dessert[] = [
  {
    name: "Frozen yoghurt",
    calories: 159,
    sweetness: 6,
    popularity: 74,
  },
  {
    name: "Apple Pie",
    calories: 237,
    sweetness: 8,
    popularity: 98,
  },
  {
    name: "Cupcake",
    calories: 262,
    sweetness: 16,
    popularity: 39,
  },
];

const columnHelper = createColumnHelper<Dessert>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => "Name",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.calories, {
    id: "calories",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Calories</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.sweetness, {
    id: "sweetness",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Sweetness</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.popularity, {
    id: "popularity",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Popularity</span>,
    footer: (info) => info.column.id,
  }),
];

interface Table2PageProps {
  simple: boolean;
}

export default function Table2Page({ simple }: Table2PageProps) {
  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 p-2">
      {!simple && <img src="/dessert.png" className="h-[300px]" />}
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
      {!simple && (
        <Link
          href="/alltables"
          className="text-base font-semibold leading-6 text-gray-900"
        >
          Next <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
