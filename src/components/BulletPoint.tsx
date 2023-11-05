import React from "react";
import { type Dessert, type Person } from "~/constants/data";

interface BulletPointProps<T> {
  data: T;
  render: (data: T) => React.ReactNode;
}

export default function BulletPoint<T>({ data, render }: BulletPointProps<T>) {
  return <li className="list-disc">{render(data)}</li>;
}
