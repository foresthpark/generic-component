import React from "react";

interface Props<T> {
  data: T;
  render: (data: T) => React.ReactNode;
}

// The only responsibility this component has is to render a list item
export default function List<T>({ data, render }: Props<T>) {
  return <li className="list-disc">{render(data)} </li>;
}
