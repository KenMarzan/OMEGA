"use client";
import { useEffect, useState } from "react";

interface Order {
  id: number;
  user_id: number;
  product_id: number;
  quantity: number;
  status: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await fetch("http://localhost:5000/orders/");
        if (!res.ok) throw new Error("Failed to fetch orders");
        const data = await res.json();
        setOrders(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-10">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {orders.map(order => (
          <div key={order.id} className="border rounded-lg p-4 shadow bg-white">
            <h2 className="text-xl font-semibold mb-2">Order #{order.id}</h2>
            <p className="text-gray-600 mb-1">Product ID: {order.product_id}</p>
            <p className="text-gray-600 mb-1">User ID: {order.user_id}</p>
            <p className="text-gray-700 mb-1">Quantity: {order.quantity}</p>
            <p className="text-gray-700 mb-1">Status: {order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
