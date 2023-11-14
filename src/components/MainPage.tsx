import Link from "next/link";
import React from "react";

export default function MainPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 last:mt-10">
      <Link href="/start/list">List Demo →</Link>
      <Link href="/start/input">Input Demo →</Link>
      <Link href="/start/form">Form Demo →</Link>
      <Link href="/start/table">Table Demo →</Link>
      <Link href="/answers">Answers →</Link>
    </div>
  );
}
