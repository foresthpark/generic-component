import React from "react";

interface BulletPointProps<T> {
  data: T;
  render: (data: T) => React.ReactNode;
}

export default function BulletPoint<T>({ data, render }: BulletPointProps<T>) {
  return <li className="list-disc">{render(data)}</li>;
}
