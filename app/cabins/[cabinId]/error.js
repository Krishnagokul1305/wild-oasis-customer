"use client";

import Link from "next/link";

export default function Error() {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">cabin not found!</h1>
      <Link 
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        href="/cabins"
      >
        go back
      </Link>
    </main>
  );
}
