export type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
};

export const personData: Person[] = [
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

export type Dessert = {
  name: string;
  calories: number;
  sweetness: number;
  popularity: number;
};

export const dessertData: Dessert[] = [
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
