"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import { useState } from "react";

export default function Navbar(): React.JSX.Element {
  const { user, isLoggedIn, logout } = useAuth();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  console.log("Navbar: Render state", { user, isLoggedIn });

  const handleLogout = () => {
    logout();
    router.push("/");
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getNavigationLinks = () => {
    const commonLinks = (
      <>
        <Link
          href="/AI_page"
          className="hover:text-[#006600] transition-colors block py-2 md:py-0"
          onClick={closeMobileMenu}
        >
          AI-assistant
        </Link>
        <Link
          href="/News"
          className="hover:text-[#006600] transition-colors block py-2 md:py-0"
          onClick={closeMobileMenu}
        >
          News and Alert
        </Link>
        <Link
          href="/Learning-Hub"
          className="hover:text-[#006600] transition-colors block py-2 md:py-0"
          onClick={closeMobileMenu}
        >
          Learning Hub
        </Link>
      </>
    );

    switch (user?.role) {
      case "farmer":
        return (
          <>
            {commonLinks}
            <Link
              href="/products"
              className="hover:text-[#006600] transition-colors block py-2 md:py-0"
              onClick={closeMobileMenu}
            >
              My Products
            </Link>
            <Link
              href="/farmers"
              className="hover:text-[#006600] transition-colors block py-2 md:py-0"
              onClick={closeMobileMenu}
            >
              Farmers Network
            </Link>
            <Link
              href="/orders"
              className="hover:text-[#006600] transition-colors block py-2 md:py-0"
              onClick={closeMobileMenu}
            >
              Orders
            </Link>
          </>
        );

      case "government":
        return (
          <>
            {commonLinks}
            <Link
              href="/government/dashboard"
              className="hover:text-[#006600] transition-colors block py-2 md:py-0"
              onClick={closeMobileMenu}
            >
              Dashboard
            </Link>
            <Link
              href="/farmers"
              className="hover:text-[#006600] transition-colors block py-2 md:py-0"
              onClick={closeMobileMenu}
            >
              Farmers
            </Link>
            <Link
              href="/products"
              className="hover:text-[#006600] transition-colors block py-2 md:py-0"
              onClick={closeMobileMenu}
            >
              All Products
            </Link>
            <Link
              href="/orders"
              className="hover:text-[#006600] transition-colors block py-2 md:py-0"
              onClick={closeMobileMenu}
            >
              All Orders
            </Link>
          </>
        );

      case "customer":
      default:
        return (
          <>
            {commonLinks}
            {isLoggedIn && (
              <>
                <Link
                  href="/products"
                  className="hover:text-[#006600] transition-colors block py-2 md:py-0"
                  onClick={closeMobileMenu}
                >
                  Browse Products
                </Link>
                <Link
                  href="/orders"
                  className="hover:text-[#006600] transition-colors block py-2 md:py-0"
                  onClick={closeMobileMenu}
                >
                  My Orders
                </Link>
              </>
            )}
          </>
        );
    }
  };

  return (
    <nav className="bg-white border-b shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="AI-DE Logo"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                width={40}
                height={40}
              />
              <p className="text-[#008000] font-bold text-lg md:text-xl">
                AI-DE
              </p>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-6 text-gray-700">
            {getNavigationLinks()}
          </div>

          {/* Desktop User Section */}
          <div className="hidden md:flex md:items-center md:gap-4">
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
                    <span className="text-sm font-medium text-gray-800">
                      {user.username}
                    </span>
                    <span className="text-xs text-gray-500 capitalize">
                      {user.role}
                    </span>
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
                  }}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-[#008000] hover:bg-[#006600] text-white px-4 py-2 rounded font-medium transition-colors"
                  onClick={() => {
                    console.log("Register link clicked");
                  }}
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-[#008000] focus:outline-none focus:text-[#008000] p-2"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-1 text-gray-700">
              {getNavigationLinks()}
            </div>

            {/* Mobile User Section */}
            <div className="pt-4 border-t border-gray-200 mt-4">
              {isLoggedIn && user ? (
                <div className="space-y-3">
                  {/* User Info */}
                  <div className="flex items-center gap-3 px-2">
                    <div className="w-8 h-8 bg-[#008000] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {user.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-800">
                        {user.username}
                      </span>
                      <span className="text-xs text-gray-500 capitalize">
                        {user.role}
                      </span>
                    </div>
                  </div>

                  {/* Logout Button */}
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-[#008000] hover:text-[#006600] font-medium transition-colors border border-[#008000] hover:border-[#006600] px-3 py-2 rounded"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link
                    href="/login"
                    className="block text-[#008000] hover:text-[#006600] font-medium transition-colors py-2 px-2"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="block bg-[#008000] hover:bg-[#006600] text-white px-3 py-2 rounded font-medium transition-colors text-center"
                    onClick={closeMobileMenu}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Debug info */}
      <div className="hidden">
        <p>
          Debug: isLoggedIn={isLoggedIn.toString()}, user={JSON.stringify(user)}
        </p>
      </div>
    </nav>
  );
}
