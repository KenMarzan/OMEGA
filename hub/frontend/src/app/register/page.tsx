"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    const res = await fetch("http://localhost:5000/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role }),
    });
    const data = await res.json();
    if (res.ok) {
      setSuccess("Registration successful! You can now log in.");
      setTimeout(() => router.push("/login"), 1500);
    } else {
      setError(data.error || "Registration failed");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleRegister} className="flex flex-col gap-4 w-80 p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <select value={role} onChange={e => setRole(e.target.value)} className="border p-2 rounded">
          <option value="customer">Customer</option>
          <option value="farmer">Farmer</option>
          <option value="government">Government</option>
        </select>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm">{success}</div>}
        <button type="submit" className="bg-[#008000] text-white rounded p-2 font-bold">Register</button>
      </form>
    </div>
  );
}
