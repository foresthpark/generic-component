import React from "react";
import { dessertData, personData } from "~/constants/data";
import ListStartExample from "./ListStartExample";

export default function ListStartTemplate() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-xl">
      <span className="pb-3">Hello Sekai/世界/World/🌎</span>
      <ul>
        {personData.map((name) => (
          <ListStartExample data={name} key={name.firstName} />
        ))}
      </ul>
      -----------------------------------------------
      <ul>
        {dessertData.map((dessert) => (
          <ListStartExample data={dessert} key={dessert.name} />
        ))}
      </ul>
      <br />
    </div>
  );
}
