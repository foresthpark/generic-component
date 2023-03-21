import React from "react";
import { type Address } from "~/constants/data";
import { type Name } from "~/pages";

interface ListExampleProps {
  data: Name | Address;
}

export default function ListExample({ data }: ListExampleProps) {
  if ("firstName" in data && "lastName" in data) {
    return (
      <li className="list-disc" key={data.firstName}>
        <span>
          {data.firstName} - {data.lastName}
        </span>
      </li>
    );
  }

  if ("street" in data && "city" in data) {
    return (
      <li className="list-disc" key={data.city}>
        <span>{`${data.street} /// ${data.city}`}</span>
      </li>
    );
  }

  return <span>No data available</span>;
}
