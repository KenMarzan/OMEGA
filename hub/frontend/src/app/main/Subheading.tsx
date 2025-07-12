import React from "react";

function Subheading() {
  return (
    <div className="relative py-16 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 opacity-60"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-lg"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Main heading with gradient text */}
        <div className="mb-6 space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Exploring New Horizons
          </h1>

          {/* Decorative line */}
          <div className="flex items-center justify-center space-x-2 my-4">
            <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1"></div>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Beta Phase Report
          </h2>
        </div>

        {/* Description with better typography */}
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            Our latest project showcases significant advancements in sustainable
            technology. This comprehensive report details the key findings from
            our recent beta testing phase and demonstrates our commitment to
            innovation.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-green-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">
                Cutting-edge sustainable technology solutions
              </p>
            </div>

            <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Analytics</h3>
              <p className="text-sm text-gray-600">
                Comprehensive data insights and reporting
              </p>
            </div>

            <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Impact</h3>
              <p className="text-sm text-gray-600">
                Positive environmental and social outcomes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subheading;
