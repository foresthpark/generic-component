import React from "react";

interface InputFieldProps<T> {
  name: keyof T;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export default function InputStartTemplate<T>({
  name,
  value,
  onChange,
  label,
  type,
  placeholder,
}: InputFieldProps<T>) {
  return (
    <div>
      <label
        htmlFor={name.toString()}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={name.toString()}
          name={name.toString()}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
