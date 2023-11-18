import React from "react";

export default function FormStartTemplate() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [values, setValues] = useState<T>(initialValues);

    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
