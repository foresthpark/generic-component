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
    <>
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        Select an option
      </label>
      <select
        id="countries_disabled"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
    </>
  );
}
