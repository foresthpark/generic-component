import React, { useState } from "react";
import InputStartTemplate from "./InputStartTemplate";

type UserFormData = {
  name: string;
  age: number;
};

export default function InputStartPage() {
  const [formData, setFormData] = useState<UserFormData>({ name: "", age: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🚀 ~ formData:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-2xl flex-col justify-center gap-4 p-4"
    >
      <span className="pb-10">
        Filename: <code>InputStartTemplate.tsx</code> &&{" "}
        <code>InputStartPage.tsx</code>
      </span>
      <InputStartTemplate
        name="name"
        value={formData.name}
        onChange={handleChange}
        label="Name"
        placeholder="Enter your name"
        type="text"
      />
      <InputStartTemplate
        name="age"
        value={formData.age}
        onChange={handleChange}
        label="Age"
        type="number"
        placeholder="Enter your age"
      />
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Submit! 🚀
      </button>
    </form>
  );
}
