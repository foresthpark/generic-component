import React from "react";
import Table1Page from "./table1";
import Table2Page from "./table2";
import Link from "next/link";

export default function AllTablesPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-start">
      <Table1Page simple />
      <Table2Page simple />
      <Link
        href="/"
        className="text-base font-semibold leading-6 text-gray-900"
      >
        Next <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
