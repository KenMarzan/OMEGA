"use client";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function WelcomeSection() {
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to AI-DE</h1>
          <p className="text-xl mb-8">Your AI-powered agricultural intelligence platform</p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/register" 
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/login" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const getRoleSpecificContent = () => {
    switch (user?.role) {
      case "farmer":
        return {
          title: `Welcome back, ${user.username}!`,
          subtitle: "Manage your farm and connect with customers",
          actions: [
            { label: "Manage Products", href: "/products", color: "bg-green-600" },
            { label: "View Orders", href: "/orders", color: "bg-blue-600" },
            { label: "AI Assistant", href: "/AI_page", color: "bg-purple-600" },
          ]
        };
      
      case "government":
        return {
          title: `Welcome, ${user.username}`,
          subtitle: "Monitor agricultural activities and support farmers",
          actions: [
            { label: "Dashboard", href: "/government/dashboard", color: "bg-green-600" },
            { label: "View Farmers", href: "/farmers", color: "bg-blue-600" },
            { label: "Market Analysis", href: "/Market_analysis", color: "bg-purple-600" },
          ]
        };
      
      case "customer":
      default:
        return {
          title: `Hello, ${user?.username ?? "User"}!`,
          subtitle: "Discover fresh products from local farmers",
          actions: [
            { label: "Browse Products", href: "/products", color: "bg-green-600" },
            { label: "My Orders", href: "/orders", color: "bg-blue-600" },
            { label: "Market Analysis", href: "/Market_analysis", color: "bg-purple-600" },
          ]
        };
    }
  };

  const content = getRoleSpecificContent();

  return (
    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-12 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
        <p className="text-xl mb-8">{content.subtitle}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          {content.actions.map((action, index) => (
            <Link 
              key={index}
              href={action.href} 
              className={`${action.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
