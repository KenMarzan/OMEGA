"use client";

import { useState } from "react";

export default function LearningHubPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Courses", icon: "📚" },
    { id: "ai-agriculture", name: "AI in Agriculture", icon: "🤖" },
    { id: "crop-management", name: "Crop Management", icon: "🌾" },
    { id: "market-insights", name: "Market Insights", icon: "📈" },
    { id: "sustainable-farming", name: "Sustainable Farming", icon: "🌱" },
    { id: "technology", name: "Farm Technology", icon: "⚙️" },
  ];

  const courses = [
    {
      id: 1,
      title: "Introduction to Precision Agriculture",
      description:
        "Learn how to use GPS, sensors, and data analytics to optimize crop yields and reduce resource waste.",
      category: "ai-agriculture",
      level: "Beginner",
      duration: "4 weeks",
      modules: 12,
      rating: 4.8,
      enrolled: 2847,
      image: "🎯",
      instructor: "Dr. Maria Santos",
      price: "Free",
    },
    {
      id: 2,
      title: "AI-Powered Crop Disease Detection",
      description:
        "Master the use of machine learning algorithms to identify and prevent crop diseases early.",
      category: "ai-agriculture",
      level: "Intermediate",
      duration: "6 weeks",
      modules: 18,
      rating: 4.9,
      enrolled: 1532,
      image: "🔬",
      instructor: "Prof. James Chen",
      price: "$99",
    },
    {
      id: 3,
      title: "Organic Farming Best Practices",
      description:
        "Comprehensive guide to organic farming methods, certification processes, and market opportunities.",
      category: "sustainable-farming",
      level: "Beginner",
      duration: "5 weeks",
      modules: 15,
      rating: 4.7,
      enrolled: 3421,
      image: "🌿",
      instructor: "Sarah Green",
      price: "Free",
    },
    {
      id: 4,
      title: "Smart Irrigation Systems",
      description:
        "Design and implement IoT-based irrigation systems to optimize water usage and crop health.",
      category: "technology",
      level: "Intermediate",
      duration: "3 weeks",
      modules: 10,
      rating: 4.6,
      enrolled: 987,
      image: "💧",
      instructor: "Carlos Rodriguez",
      price: "$149",
    },
    {
      id: 5,
      title: "Sustainable Agriculture Practices",
      description:
        "Learn advanced sustainable farming techniques, environmental impact assessment, and green certification processes.",
      category: "sustainable-farming",
      level: "Advanced",
      duration: "8 weeks",
      modules: 24,
      rating: 4.8,
      enrolled: 756,
      image: "🌿",
      instructor: "Dr. Linda Wang",
      price: "$199",
    },
    {
      id: 6,
      title: "Crop Rotation and Soil Health",
      description:
        "Master sustainable crop rotation techniques and soil management for long-term farm productivity.",
      category: "crop-management",
      level: "Beginner",
      duration: "4 weeks",
      modules: 12,
      rating: 4.5,
      enrolled: 2156,
      image: "🌍",
      instructor: "Dr. Robert Kim",
      price: "Free",
    },
  ];

  const articles = [
    {
      id: 1,
      title: "The Future of Vertical Farming",
      excerpt:
        "Exploring how vertical farming is revolutionizing urban agriculture and food security.",
      readTime: "8 min read",
      category: "Technology",
      date: "2024-01-15",
      author: "Tech Agriculture Magazine",
    },
    {
      id: 2,
      title: "Climate-Resilient Crop Varieties",
      excerpt:
        "New developments in drought-resistant and climate-adapted crop varieties for changing weather patterns.",
      readTime: "12 min read",
      category: "Crop Management",
      date: "2024-01-12",
      author: "Agricultural Research Journal",
    },
    {
      id: 3,
      title: "Blockchain in Agriculture Supply Chain",
      excerpt:
        "How blockchain technology is improving transparency and traceability in agricultural supply chains.",
      readTime: "10 min read",
      category: "Technology",
      date: "2024-01-10",
      author: "Future Farm Tech",
    },
  ];

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Learning Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Empower your agricultural journey with cutting-edge knowledge and
              AI-driven insights
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Learning
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Browse Courses
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Courses Available</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
            <div className="text-gray-600">Students Enrolled</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">95%</div>
            <div className="text-gray-600">Completion Rate</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Course Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 hover:bg-green-100"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4 text-center">
                    {course.image}
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        course.level === "Beginner"
                          ? "bg-green-100 text-green-800"
                          : course.level === "Intermediate"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {course.level}
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      {course.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {course.description}
                  </p>

                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {"★".repeat(Math.floor(course.rating))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {course.rating} ({course.enrolled} students)
                    </span>
                  </div>

                  <div className="text-sm text-gray-600 mb-4">
                    <div>👨‍🏫 {course.instructor}</div>
                    <div>
                      ⏱️ {course.duration} • {course.modules} modules
                    </div>
                  </div>

                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Articles Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Latest Articles & Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {article.readTime}
                  </span>
                  <button className="text-green-600 hover:text-green-800 font-medium">
                    Read More →
                  </button>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  By {article.author}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Paths Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Recommended Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold mb-2">
                🌱 Beginner Farmer Track
              </h3>
              <p className="text-gray-600 mb-3">
                Perfect for new farmers starting their agricultural journey
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Basics of Agriculture</li>
                <li>• Crop Rotation and Soil Health</li>
                <li>• Organic Farming Best Practices</li>
                <li>• Farm Business Planning</li>
              </ul>
              <button className="mt-4 text-green-600 hover:text-green-800 font-medium">
                Start Path →
              </button>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold mb-2">
                🤖 AI & Technology Track
              </h3>
              <p className="text-gray-600 mb-3">
                Advanced techniques for tech-savvy farmers
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Introduction to Precision Agriculture</li>
                <li>• AI-Powered Crop Disease Detection</li>
                <li>• Smart Irrigation Systems</li>
                <li>• Data Analytics for Farming</li>
              </ul>
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                Start Path →
              </button>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Join Our Learning Community
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Connect with fellow farmers, share experiences, and get expert
              guidance from agricultural professionals worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Join Discussion Forum
              </button>
              <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors">
                Schedule 1-on-1 Mentoring
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
