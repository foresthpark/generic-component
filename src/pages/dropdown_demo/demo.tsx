import React, { useState } from "react";
import { DropdownTemplate } from "~/components/DropdownTemplate";

export default function DropdownDemo() {
  const stringOptions: string[] = ["Option 1", "Option 2", "Option 3"];
  const numberOptions: number[] = [1, 2, 3];

  const [selectedStringOption, setSelectedStringOption] = useState<
    string | null
  >(null);
  const [selectedNumberOption, setSelectedNumberOption] = useState<
    number | null
  >(null);

  return (
    <div className="flex h-full w-full gap-10 p-4">
      <div>
        <h1>String Dropdown</h1>
        <DropdownTemplate
          options={stringOptions}
          selectedOption={selectedStringOption}
          onSelect={(option) => setSelectedStringOption(option)}
        />
      </div>

      <div>
        <h1>Number Dropdown</h1>
        <DropdownTemplate
          options={numberOptions}
          selectedOption={selectedNumberOption}
          onSelect={(option) => setSelectedNumberOption(option)}
        />
      </div>
    </div>
  );
}
