"use client";
import { useEffect, useState } from "react";

interface Farmer {
  id: number;
  user_id: number;
  farm_name: string;
  location: string;
}

export default function FarmersPage() {
  const [farmers, setFarmers] = useState<Farmer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchFarmers() {
      try {
        const res = await fetch("http://localhost:5000/farmers/");
        if (!res.ok) throw new Error("Failed to fetch farmers");
        const data = await res.json();
        setFarmers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchFarmers();
  }, []);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-10">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Farmers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {farmers.map(farmer => (
          <div key={farmer.id} className="border rounded-lg p-4 shadow bg-white">
            <h2 className="text-xl font-semibold mb-2">{farmer.farm_name}</h2>
            <p className="text-gray-600 mb-1">Location: {farmer.location}</p>
            <p className="text-gray-500 text-sm">User ID: {farmer.user_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
