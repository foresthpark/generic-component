import React, { useState } from "react";

interface FormProps<T> {
  initialValues: T;
  onSubmit: (values: T) => void;
  children: (
    values: T,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  ) => JSX.Element;
}

export default function FormTemplate<T>({
  initialValues,
  onSubmit,
  children,
}: FormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value } as T);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return <form onSubmit={handleSubmit}>{children(values, handleChange)}</form>;
}
