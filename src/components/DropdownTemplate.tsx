/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { useState } from "react";

export function DropdownTemplate() {
  const options: string[] = ["Option 1", "Option 2", "Option 3"];

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="border-lg select-none border-[1px] border-green-400 p-1">
      <select
        value={selectedOption as string}
        onChange={(e) => handleOptionSelect(e.target.value)}
      >
        <option value={selectedOption as unknown as string}>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option as string} value={option as string}>
            {option as string}
          </option>
        ))}
      </select>
    </div>
  );
}
