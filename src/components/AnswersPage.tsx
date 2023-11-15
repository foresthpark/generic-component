import Link from "next/link";
import React from "react";
export default function AnswersPageList() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <span>No cheating!</span>

      <video controls className="w-1/2 p-10">
        <source
          src="https://y.yarn.co/9093b8aa-7754-4be3-b4ef-48f6b6fa3d92.mp4
          "
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Link href="/list_demo/list">List Demo Answer →</Link>
      <Link href="/input_demo/input">Input Demo Answer →</Link>
      <Link href="/form_demo/form">Form Demo Answer →</Link>
      <Link href="/table_demo/table">Table Demo Answer →</Link>
    </div>
  );
}
