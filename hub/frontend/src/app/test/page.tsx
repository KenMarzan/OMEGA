"use client";
import Link from "next/link";

export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Navigation Test Page</h1>
      <p className="mb-4">If you can see this page, routing is working correctly.</p>
      <div className="flex gap-4">
        <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Go to Home
        </Link>
        <Link href="/login" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Go to Login
        </Link>
        <Link href="/register" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          Go to Register
        </Link>
      </div>
    </div>
  );
}
