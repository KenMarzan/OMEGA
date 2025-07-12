"use client";
import { useEffect, useState } from "react";
import { apiEndpoints, apiRequest } from "@/utils/api";

interface Product {
  id: number;
  farmer_id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await apiRequest(apiEndpoints.products);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price - b.price;
        case "stock":
          return b.stock - a.stock;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const getStockStatus = (stock: number) => {
    if (stock > 20)
      return { text: "In Stock", color: "bg-green-100 text-green-800" };
    if (stock > 5)
      return { text: "Low Stock", color: "bg-yellow-100 text-yellow-800" };
    return { text: "Out of Stock", color: "bg-red-100 text-red-800" };
  };

  const getProductImage = (productName: string) => {
    const name = productName.toLowerCase();
    if (name.includes("tomato"))
      return "https://images.unsplash.com/photo-1546470427-e7b91cd8f3ce?w=400&h=300&fit=crop";
    if (name.includes("egg"))
      return "https://images.unsplash.com/photo-1569288052389-dac9b01ac5a9?w=400&h=300&fit=crop";
    if (name.includes("potato"))
      return "https://images.unsplash.com/photo-1573312575617-169bd8fb3b95?w=400&h=300&fit=crop";
    if (name.includes("spinach"))
      return "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=400&h=300&fit=crop";
    if (name.includes("rice"))
      return "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop";
    if (name.includes("corn"))
      return "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop";
    if (name.includes("coconut"))
      return "https://images.unsplash.com/photo-1588594589782-1d6b9e6c5c3d?w=400&h=300&fit=crop";
    if (name.includes("banana"))
      return "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop";
    if (name.includes("coffee"))
      return "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=300&fit=crop";
    if (name.includes("sugar"))
      return "https://images.unsplash.com/photo-1571682580387-12b7b24a9e1b?w=400&h=300&fit=crop";
    return "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6 text-red-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Error loading products
          </h3>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Modern Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fresh <span className="text-green-600">Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover premium agricultural products from local Philippine
              farmers
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Modern Search and Sort */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search for fresh products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:bg-white transition-all duration-200"
                />
              </div>
            </div>
            <div className="sm:w-56">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="block w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:bg-white transition-all duration-200"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="stock">Sort by Stock</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zM8 6a2 2 0 114 0v1H8V6zm0 3a1 1 0 012 0 1 1 0 11-2 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => {
              const stockStatus = getStockStatus(product.stock);
              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={getProductImage(product.name)}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${stockStatus.color}`}
                      >
                        {stockStatus.text}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Product Details Grid */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500">
                          Price
                        </span>
                        <span className="text-2xl font-bold text-green-600">
                          ₱{product.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500">
                          Available
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {product.stock} units
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500">
                          Farmer
                        </span>
                        <span className="text-sm font-semibold text-blue-600">
                          #{product.farmer_id}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                          product.stock === 0
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-green-600 text-white hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-0.5"
                        }`}
                        disabled={product.stock === 0}
                      >
                        {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                      </button>
                      <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-green-300 transition-all duration-200 group/btn">
                        <svg
                          className="w-5 h-5 text-gray-600 group-hover/btn:text-red-500 transition-colors"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modern Results Count */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200">
            <svg
              className="w-5 h-5 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Showing {filteredProducts.length} of {products.length} products
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
