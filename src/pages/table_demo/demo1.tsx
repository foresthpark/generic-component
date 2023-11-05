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
  return <TableTemplate<Person> defaultData={defaultData} />;
}
