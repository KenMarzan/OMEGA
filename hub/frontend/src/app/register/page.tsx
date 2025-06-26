"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { apiEndpoints, apiRequest } from "@/utils/api";

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
    const res = await apiRequest(apiEndpoints.register, {
      method: "POST",
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleRegister} className="flex flex-col gap-4 w-80 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800">Join AI-DE</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-transparent"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-transparent"
          required
        />
        <select 
          value={role} 
          onChange={e => setRole(e.target.value)} 
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-transparent"
        >
          <option value="customer">Customer</option>
          <option value="farmer">Farmer</option>
          <option value="government">Government Official</option>
        </select>
        {error && <div className="text-red-500 text-sm bg-red-50 p-2 rounded">{error}</div>}
        {success && <div className="text-green-600 text-sm bg-green-50 p-2 rounded">{success}</div>}
        <button type="submit" className="bg-[#008000] hover:bg-[#006600] text-white rounded-lg p-3 font-bold transition-colors">
          Register
        </button>
        <p className="text-center text-gray-600 text-sm">
          Already have an account? <Link href="/login" className="text-[#008000] hover:underline">Login here</Link>
        </p>
      </form>
    </div>
  );
}
