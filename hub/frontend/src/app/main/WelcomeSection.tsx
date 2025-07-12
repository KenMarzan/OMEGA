"use client";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function WelcomeSection() {
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <div className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-emerald-600 via-green-500 to-teal-600">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Floating particles pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-[80vh]">
          <div className="text-center max-w-5xl mx-auto">
            {/* Philippine Flag Badge */}
            <div className="mb-8 flex justify-center">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
                <span className="text-2xl">🇵🇭</span>
                <span className="text-white font-semibold">
                  Proudly Philippine-Made
                </span>
              </div>
            </div>

            {/* Logo/Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl transform hover:scale-110 transition-transform duration-300">
                  <span className="text-5xl">🌾</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur opacity-30 animate-pulse"></div>
              </div>
            </div>

            {/* Main Content */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent leading-tight animate-fade-in">
              Welcome to AI-DE
            </h1>
            <p className="text-2xl md:text-3xl text-emerald-50 mb-4 font-light">
              Your AI-powered agricultural intelligence platform
            </p>
            <p className="text-lg text-emerald-100/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Empowering Filipino farmers with cutting-edge AI technology for
              smarter farming, better yields, and sustainable agriculture across
              the Philippines.
            </p>

            {/* Feature Highlights */}
            <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                {
                  icon: "🤖",
                  label: "AI Assistant",
                  desc: "Smart farming advice",
                },
                {
                  icon: "🌱",
                  label: "Crop Management",
                  desc: "Optimize yields",
                },
                {
                  icon: "📰",
                  label: "Latest News",
                  desc: "Stay informed",
                },
                { icon: "📱", label: "Mobile Ready", desc: "Access anywhere" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div className="text-white font-semibold text-sm">
                    {feature.label}
                  </div>
                  <div className="text-emerald-100/70 text-xs">
                    {feature.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/register"
                className="group relative bg-white text-emerald-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <span className="relative flex items-center gap-3">
                  <span>Get Started Free</span>
                  <svg
                    className="w-6 h-6 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="/login"
                className="group relative border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-md hover:border-white/60 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <span className="relative flex items-center gap-3">
                  <svg
                    className="w-6 h-6 group-hover:rotate-12 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <span>Sign In</span>
                </span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-emerald-100/80">
              <div className="text-center group hover:text-white transition-colors">
                <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform">
                  10K+
                </div>
                <div className="text-sm">Happy Farmers</div>
              </div>
              <div className="text-center group hover:text-white transition-colors">
                <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform">
                  24/7
                </div>
                <div className="text-sm">AI Support</div>
              </div>
              <div className="text-center group hover:text-white transition-colors">
                <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform">
                  99.9%
                </div>
                <div className="text-sm">Uptime</div>
              </div>
              <div className="text-center group hover:text-white transition-colors">
                <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform">
                  Real-time
                </div>
                <div className="text-sm">Market Data</div>
              </div>
            </div>
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
          icon: "🌱",
          gradient: "from-emerald-600 to-green-500",
          actions: [
            {
              label: "Manage Products",
              href: "/products",
              color: "bg-emerald-600 hover:bg-emerald-700",
              icon: "🛒",
              description: "Add and manage your farm products",
            },
            {
              label: "View Orders",
              href: "/orders",
              color: "bg-blue-600 hover:bg-blue-700",
              icon: "📦",
              description: "Track your customer orders",
            },
            {
              label: "AI Assistant",
              href: "/AI_page",
              color: "bg-purple-600 hover:bg-purple-700",
              icon: "🤖",
              description: "Get AI-powered farming advice",
            },
          ],
        };

      case "government":
        return {
          title: `Welcome, ${user.username}`,
          subtitle: "Monitor agricultural activities and support farmers",
          icon: "🏛️",
          gradient: "from-blue-600 to-indigo-500",
          actions: [
            {
              label: "Dashboard",
              href: "/government/dashboard",
              color: "bg-blue-600 hover:bg-blue-700",
              icon: "📊",
              description: "View agricultural statistics",
            },
            {
              label: "View Farmers",
              href: "/farmers",
              color: "bg-emerald-600 hover:bg-emerald-700",
              icon: "👨‍🌾",
              description: "Monitor farmer activities",
            },
            {
              label: "Latest News",
              href: "/News",
              color: "bg-purple-600 hover:bg-purple-700",
              icon: "�",
              description: "Stay updated with news",
            },
          ],
        };

      case "customer":
      default:
        return {
          title: `Hello, ${user?.username ?? "User"}!`,
          subtitle: "Discover fresh products from local farmers",
          icon: "🛍️",
          gradient: "from-green-600 to-emerald-500",
          actions: [
            {
              label: "Browse Products",
              href: "/products",
              color: "bg-emerald-600 hover:bg-emerald-700",
              icon: "🌾",
              description: "Find fresh farm products",
            },
            {
              label: "My Orders",
              href: "/orders",
              color: "bg-blue-600 hover:bg-blue-700",
              icon: "📋",
              description: "Track your purchases",
            },
            {
              label: "Learning Hub",
              href: "/Learning-Hub",
              color: "bg-purple-600 hover:bg-purple-700",
              icon: "�",
              description: "Educational resources",
            },
          ],
        };
    }
  };

  const content = getRoleSpecificContent();

  return (
    <div
      className={`relative min-h-[70vh] overflow-hidden bg-gradient-to-br ${content.gradient}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Floating particles pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-[70vh]">
        <div className="text-center max-w-6xl mx-auto">
          {/* User Icon with Glow Effect */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl transform hover:scale-110 transition-all duration-300">
                <span className="text-4xl">{content.icon}</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-white/10 rounded-3xl blur opacity-50 animate-pulse"></div>
            </div>
          </div>

          {/* Welcome Message */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent leading-tight">
            {content.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-16 font-light max-w-3xl mx-auto">
            {content.subtitle}
          </p>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {content.actions.map((action, index) => (
              <Link
                key={index}
                href={action.href}
                className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative text-center">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {action.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-100 transition-colors">
                    {action.label}
                  </h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors mb-6 leading-relaxed">
                    {action.description}
                  </p>
                  <div className="inline-flex items-center text-emerald-200 group-hover:text-white transition-all duration-300">
                    <span className="font-semibold">Explore</span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Enhanced Quick Stats */}
          <div className="flex flex-wrap justify-center gap-12 text-white/80">
            <div className="text-center group hover:text-white transition-all duration-300 cursor-default">
              <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-sm text-emerald-100/80 group-hover:text-white transition-colors">
                Support Available
              </div>
            </div>
            <div className="text-center group hover:text-white transition-all duration-300 cursor-default">
              <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                AI-Powered
              </div>
              <div className="text-sm text-emerald-100/80 group-hover:text-white transition-colors">
                Smart Insights
              </div>
            </div>
            <div className="text-center group hover:text-white transition-all duration-300 cursor-default">
              <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                Real-time
              </div>
              <div className="text-sm text-emerald-100/80 group-hover:text-white transition-colors">
                Market Data
              </div>
            </div>
            <div className="text-center group hover:text-white transition-all duration-300 cursor-default">
              <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                Secure
              </div>
              <div className="text-sm text-emerald-100/80 group-hover:text-white transition-colors">
                Data Protection
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
