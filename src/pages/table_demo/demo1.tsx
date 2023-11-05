import TableTemplate from "~/components/TableTemplate";

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

const personKeyMap = {
  firstName: "First Name",
  lastName: "Last Name",
  age: "Age",
  visits: "Visits",
};

export default function TableDemo1() {
  return (
    <>
      <TableTemplate<Person> defaultData={defaultData} keyMap={personKeyMap} />
    </>
  );
}
