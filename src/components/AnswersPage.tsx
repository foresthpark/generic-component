import Link from "next/link";
import React from "react";

export default function AnswersPageList() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <Link href="/list_demo/list">List Demo Answer →</Link>
      <Link href="/input_demo/input">Input Demo Answer →</Link>
      <Link href="/form_demo/form">Form Demo Answer →</Link>
      <Link href="/table_demo/table">Table Demo Answer →</Link>
    </div>
  );
}
