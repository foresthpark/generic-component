import React, { useState } from "react";

export default function FormStartTemplate() {
  const [values, setValues] = useState<T>(initialValues);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <form
      className="mx-auto flex w-full max-w-2xl flex-col justify-center gap-4 p-4"
      onSubmit={handleSubmit}
    >
      {children(values, handleChange)}
    </form>
  );
}
