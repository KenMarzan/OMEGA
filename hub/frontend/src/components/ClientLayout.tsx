"use client";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </AuthProvider>
  );
}
