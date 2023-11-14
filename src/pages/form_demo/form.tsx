import React from "react";
import FormTemplate from "~/components/FormTemplate";
import InputTemplate from "~/components/InputTemplate";

interface UserFormData {
  name: string;
  age: number;
  email: string;
}

export default function FormPage() {
  const initialValues: UserFormData = { name: "", age: 0, email: "" };

  const handleSubmit = (values: UserFormData) => {
    console.log(values);
    // Submit logic here
  };

  return (
    <FormTemplate<UserFormData>
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {(values, handleChange) => (
        <>
          <InputTemplate<UserFormData>
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            label="Name"
            placeholder="Enter your name"
          />
          <InputTemplate<UserFormData>
            name="age"
            value={values.age}
            onChange={handleChange}
            type="number"
            label="Age"
            placeholder="Enter your age"
          />
          <InputTemplate<UserFormData>
            name="email"
            value={values.email}
            onChange={handleChange}
            type="email"
            label="Email"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit! 🚀
          </button>
        </>
      )}
    </FormTemplate>
  );
}
