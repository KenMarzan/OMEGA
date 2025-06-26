"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { apiEndpoints, apiRequest } from "@/utils/api";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  console.log("LoginPage: Component rendered");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    console.log("LoginPage: Attempting login with", { username });
    
    try {
      const res = await apiRequest(apiEndpoints.login, {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      
      console.log("LoginPage: Login response", { ok: res.ok, data });
      
      if (res.ok) {
        // Use the AuthContext login function
        const userData = {
          id: data.user?.id?.toString() || "1",
          username: data.user?.username || username,
          role: data.role || "customer",
        };
        
        console.log("LoginPage: Logging in user", userData);
        login(userData);
        
        // Redirect based on role
        if (data.role === "government") {
          router.push("/government/dashboard");
        } else {
          router.push("/");
        }
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      console.error("LoginPage: Login error", err);
      setError("Network error occurred");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-80 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800">Login to AI-DE</h1>
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
        {error && <div className="text-red-500 text-sm bg-red-50 p-2 rounded">{error}</div>}
        <button type="submit" className="bg-[#008000] hover:bg-[#006600] text-white rounded-lg p-3 font-bold transition-colors">
          Login
        </button>
        <p className="text-center text-gray-600 text-sm">
          Don't have an account? <Link href="/register" className="text-[#008000] hover:underline">Register here</Link>
        </p>
      </form>
    </div>
  );
}
