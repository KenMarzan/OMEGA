"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";

export default function Navbar(): React.JSX.Element {
  const { user, isLoggedIn, logout } = useAuth();
  const router = useRouter();

  console.log("Navbar: Render state", { user, isLoggedIn });

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const getNavigationLinks = () => {
    const commonLinks = (
      <>
        <Link href="/AI_page" className="hover:text-[#006600] transition-colors">AI-assistant</Link>
        <Link href="/Market_analysis" className="hover:text-[#006600] transition-colors">Market-analysis</Link>
        <Link href="/News" className="hover:text-[#006600] transition-colors">News and Alert</Link>
        <Link href="/Learning-Hub" className="hover:text-[#006600] transition-colors">Learning Hub</Link>
      </>
    );

    switch (user?.role) {
      case "farmer":
        return (
          <>
            {commonLinks}
            <Link href="/products" className="hover:text-[#006600] transition-colors">My Products</Link>
            <Link href="/farmers" className="hover:text-[#006600] transition-colors">Farmers Network</Link>
            <Link href="/orders" className="hover:text-[#006600] transition-colors">Orders</Link>
          </>
        );
      
      case "government":
        return (
          <>
            {commonLinks}
            <Link href="/government/dashboard" className="hover:text-[#006600] transition-colors">Dashboard</Link>
            <Link href="/farmers" className="hover:text-[#006600] transition-colors">Farmers</Link>
            <Link href="/products" className="hover:text-[#006600] transition-colors">All Products</Link>
            <Link href="/orders" className="hover:text-[#006600] transition-colors">All Orders</Link>
          </>
        );
      
      case "customer":
      default:
        return (
          <>
            {commonLinks}
            {isLoggedIn && (
              <>
                <Link href="/products" className="hover:text-[#006600] transition-colors">Browse Products</Link>
                <Link href="/orders" className="hover:text-[#006600] transition-colors">My Orders</Link>
              </>
            )}
          </>
        );
    }
  };

  return (
    <nav className="flex flex-row justify-between items-center px-8 h-20 border-b shadow-sm bg-white">
      {/* Logo Section */}
      <div className="flex flex-row items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="AI-DE Logo"
            className="w-10 h-10 rounded-full"
            width={40}
            height={40}
          />
          <p className="text-[#008000] font-bold text-xl">AI-DE</p>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-gray-700">
        {getNavigationLinks()}
      </div>

      {/* User Section - Always render login/register for testing */}
      <div className="flex items-center gap-4">
        {isLoggedIn && user ? (
          <div className="flex items-center gap-4">
            {/* User Info */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#008000] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {user.username.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-800">{user.username}</span>
                <span className="text-xs text-gray-500 capitalize">{user.role}</span>
              </div>
            </div>
            
            {/* Logout Button */}
            <button 
              onClick={handleLogout}
              className="text-[#008000] hover:text-[#006600] font-medium transition-colors border border-[#008000] hover:border-[#006600] px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link 
              href="/login" 
              className="text-[#008000] hover:text-[#006600] font-medium transition-colors"
              onClick={() => {
                console.log("Login link clicked");
                // Don't prevent default, let Next.js handle it
              }}
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="bg-[#008000] hover:bg-[#006600] text-white px-4 py-2 rounded font-medium transition-colors"
              onClick={() => {
                console.log("Register link clicked");
                // Don't prevent default, let Next.js handle it
              }}
            >
              Register
            </Link>
          </div>
        )}
      </div>
      
      {/* Debug info */}
      <div className="hidden">
        <p>Debug: isLoggedIn={isLoggedIn.toString()}, user={JSON.stringify(user)}</p>
      </div>
    </nav>
  );
}
