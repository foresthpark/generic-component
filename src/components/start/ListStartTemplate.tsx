import React from "react";
import ListExample from "../ListExample";
import { dessertData, personData } from "~/constants/data";

export default function ListStartTemplate() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-xl">
      <span className="pb-3">Hello Sekai/世界/World/🌎</span>
      <ul>
        {personData.map((name) => (
          <ListExample data={name} key={name.firstName} />
        ))}
      </ul>
      -----------------------------------------------
      <ul>
        {dessertData.map((dessert) => (
          <ListExample data={dessert} key={dessert.name} />
        ))}
      </ul>
      <br />
    </div>
  );
}
