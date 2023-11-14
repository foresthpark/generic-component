import Link from "next/link";
import React from "react";

export default function MainPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <Link href="/list_demo/list">List Demo →</Link>
      <Link href="/input_demo/input">Input Demo →</Link>
      <Link href="form_demo/form">Form Demo →</Link>
      <Link href="/table_demo/table">Table Demo →</Link>
    </div>
  );
}
