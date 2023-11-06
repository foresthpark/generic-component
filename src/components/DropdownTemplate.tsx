type DropdownProps<T> = {
  options: T[];
  selectedOption: T;
  onSelect: (option: T) => void;
};

export function DropdownTemplate<T>({
  options,
  selectedOption,
  onSelect,
}: DropdownProps<T>) {
  const handleOptionSelect = (option: T) => {
    onSelect(option);
  };

  return (
    <div className="border-lg select-none border-[1px] border-green-400 p-1">
      <select
        value={selectedOption as string}
        onChange={(e) => handleOptionSelect(e.target.value as T)}
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
