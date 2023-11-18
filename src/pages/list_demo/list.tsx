import Head from "next/head";
import BulletPoint from "~/components/BulletPoint";
type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
};

type Dessert = {
  name: string;
  calories: number;
  sweetness: number;
  popularity: number;
};

const personData: Person[] = [
  {
    firstName: "Forest",
    lastName: "Park",
    age: 24,
    visits: 100,
  },
  {
    firstName: "Reanu",
    lastName: "Keeves",
    age: 40,
    visits: 40,
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 45,
    visits: 20,
  },
];

const dessertData: Dessert[] = [
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

export default function ListPage() {
  return (
    <>
      <Head>
        <title>Hello Sekai/世界/World/🌎</title>
        <meta name="description" content="Hello Sekai/世界/World/🌎" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen flex-col items-center justify-center text-xl">
        <span className="pb-3">Hello Sekai/世界/World/🌎</span>
        <ul>
          {personData.map((name) => (
            <BulletPoint
              data={name}
              key={name.firstName}
              render={(name) => (
                <span>
                  {name.firstName} {name.lastName} - {name.age}yo /{" "}
                  {name.visits} visits
                </span>
              )}
            />
          ))}
        </ul>
        -----------------------------------------------
        <ul>
          {dessertData.map((dessert) => (
            <BulletPoint
              data={dessert}
              key={dessert.name}
              render={(dessert) => (
                <span>
                  {dessert.name} - {dessert.calories} calories /{" "}
                  {dessert.popularity} points
                </span>
              )}
            />
          ))}
        </ul>
        <br />
      </div>
    </>
  );
}
