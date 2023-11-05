import React from "react";
import BulletPoint from "./BulletPoint";

interface ListExampleProps<T> {
  data: T;
  render: (data: T) => React.ReactNode;
}

export default function ListExample<T>({ data, render }: ListExampleProps<T>) {
  return <BulletPoint data={data} render={render} />;
}
