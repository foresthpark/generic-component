import TableTemplate from "~/components/TableTemplate";
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
  },
];

export default function TableDemo1() {
  const columnHelper = createColumnHelper<Person>();
  // Don't try adding TS typs to this. There is a bug in the library
  const columns = useMemo(
    () => [
      columnHelper.accessor("firstName", {
        cell: (info) => info.getValue(),
        header: () => "First Name",
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor((row) => row.lastName, {
        id: "lastName",
        cell: (info) => <i>{info.getValue()}</i>,
        header: () => <span>Last Name</span>,
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("age", {
        header: () => "Age",
        cell: (info) => info.renderValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor("visits", {
        header: () => <span>Visits</span>,
        footer: (info) => info.column.id,
      }),
    ],
    [columnHelper]
  );

  return <TableTemplate<Person> defaultData={defaultData} columns={columns} />;
}
