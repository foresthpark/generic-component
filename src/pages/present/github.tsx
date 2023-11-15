import Link from "next/link";
import React from "react";

export default function github() {
  return (
    <div className="flex h-screen w-full flex-col items-start justify-center pl-10">
      <code className="text-4xl">
        _git clone
        <br />
        <span className="font-semibold">
          https://github.com/foresthpark/generic-component
        </span>
      </code>
      <code className="text-4xl">
        _cd generic-component
        <br />
        _npm i || yarn || pnpm i
      </code>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="text-2xl font-semibold leading-6 text-gray-900"
        >
          Start <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
