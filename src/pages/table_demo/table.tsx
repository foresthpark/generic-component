import TableTemplate from "~/components/TableTemplate";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
};

type User = {
  name: string;
  username: string;
  email: string;
  phone: number;
};

const userData: User[] = [
  {
    name: "Tanner Linsley",
    username: "tannerlinsley",
    email: "t.linsley@gmail.com",
    phone: 5551234567,
  },
  {
    name: "Tandy Miller",
    username: "tandymiller",
    email: "t.miller@gmail.com",
    phone: 4039309283,
  },
  {
    name: "Joe Dirte",
    username: "joedirte",
    email: "j.dirte@gmail.com",
    phone: 6048379273,
  },
];

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

type UserKeyMap = {
  [P in keyof User]: string;
};

const userKeyMap: UserKeyMap = {
  name: "Name",
  username: "Username",
  email: "Email",
  phone: "Phone",
};

type PersonKeyMap = {
  [P in keyof Person]: string;
};

const personKeyMap: PersonKeyMap = {
  firstName: "First Name",
  lastName: "Last Name",
  age: "Age",
  visits: "Visits",
};

export default function TableDemo() {
  return (
    <>
      <TableTemplate<Person> defaultData={defaultData} keyMap={personKeyMap} />
      <TableTemplate<User> defaultData={userData} keyMap={userKeyMap} />
    </>
  );
}
