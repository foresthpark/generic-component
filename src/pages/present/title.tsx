import Link from "next/link";
import React from "react";

export default function PresentTitlePage() {
  return (
    <div className="h-screen bg-white p-10 font-sans ">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Generic Typescript Components
          </h1>
          <p className="mt-6 text-4xl leading-8 text-gray-500">
            One componenet to rule them all
          </p>
          <p className="mt-6 text-2xl leading-8 text-gray-500">
            Creating a generic pure component in React to increase reusability,
            improve type safety, and maintain easily.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/present/table1"
              className="text-2xl font-semibold leading-6 text-gray-900"
            >
              Start <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
