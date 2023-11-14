import Link from "next/link";
import React from "react";

export default function MainPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 last:mt-10">
      <Link href="/start/list">List Demo →</Link>
      <Link href="/input_demo/input">Input Demo →</Link>
      <Link href="form_demo/form">Form Demo →</Link>
      <Link href="/table_demo/table">Table Demo →</Link>
      <Link href="/answers">Answers →</Link>
    </div>
  );
}
