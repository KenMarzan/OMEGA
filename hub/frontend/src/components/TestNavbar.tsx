"use client";
import Link from "next/link";

export default function TestNavbar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="flex gap-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/login" className="hover:underline">Login</Link>
        <Link href="/register" className="hover:underline">Register</Link>
        <Link href="/products" className="hover:underline">Products</Link>
      </div>
    </nav>
  );
}
