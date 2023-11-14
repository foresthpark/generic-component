import React from "react";
import TableStartTemplate from "~/components/start/Table/TableStartTemplate";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
};

export default function TableStartingPage() {
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

  return <TableStartTemplate defaultData={defaultData} />;
}
