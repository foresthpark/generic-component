import React from "react";
import { type Person, type Dessert } from "~/constants/data";

interface ListExampleProps {
  data: Person | Dessert;
}

export default function ListExample({ data }: ListExampleProps) {
  if ("firstName" in data && "lastName" in data) {
    return (
      <li className="list-disc" key={data.firstName}>
        <span>
          {data.firstName} - {data.lastName} - {data.age}yo - {data.visits}{" "}
          visits
        </span>
      </li>
    );
  }

  if ("name" in data && "calories" in data) {
    return (
      <li className="list-disc" key={data.name}>
        <span>{`${data.name} - ${data.calories}kCal - ${data.sweetness}/100 sweet - ${data.popularity}/10 popularity`}</span>
      </li>
    );
  }

  return <span>No data available</span>;
}
