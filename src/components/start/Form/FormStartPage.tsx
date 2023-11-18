import React, { useState } from "react";
import InputTemplate from "~/components/InputTemplate";
import FormStartTemplate from "./FormStartTemplate";

type UserFormData = {
  name: string;
  age: number;
  email: string;
};

export default function FormStartPage() {
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    age: 0,
    email: "",
  });

  const initialValues: UserFormData = { name: "", age: 0, email: "" };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🚀 ~ formData:", formData);
  };

  return (
    <FormStartTemplate<UserFormData>
      onSubmit={handleSubmit}
      initialValues={initialValues}
    >
      <span className="pb-10">
        Filename: <code>FormStartPage.tsx</code>
      </span>
      <InputTemplate
        name="name"
        value={formData.name}
        onChange={handleChange}
        label="Name"
        placeholder="Enter your name"
        type="text"
      />
      <InputTemplate
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
    </FormStartTemplate>
  );
}
