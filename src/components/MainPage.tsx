import Link from "next/link";
import React from "react";

export default function MainPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 last:mt-10">
      <img
        className="w-1/4"
        src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"
        alt=""
      />
      <Link className="text-xl font-semibold" href="/start/list">
        List Demo →
      </Link>
      <Link className="text-xl font-semibold" href="/start/input">
        Input Demo →
      </Link>
      <Link className="text-xl font-semibold" href="/start/form">
        Form Demo →
      </Link>
      <Link className="text-xl font-semibold" href="/start/table">
        Table Demo →
      </Link>
      <Link className="text-xs font-thin" href="/answers">
        Answers →
      </Link>
    </div>
  );
}
