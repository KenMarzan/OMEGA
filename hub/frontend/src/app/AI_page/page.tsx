"use client";
import React, { useState } from "react";
import {
  sendChatMessage,
  getCropAnalysis,
  getWeatherAdvice,
  getPestIdentification,
} from "../../utils/api";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface AITool {
  id: string;
  title: string;
  description: string;
  icon: string;
  action: () => void;
}

export default function AI_page(): React.JSX.Element {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI agricultural assistant powered by advanced AI. How can I help you optimize your farming today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<
    "english" | "tagalog"
  >("english");

  // Function to handle language change
  const handleLanguageChange = (language: "english" | "tagalog") => {
    setSelectedLanguage(language);

    // Update the welcome message based on language
    const welcomeMessage =
      language === "tagalog"
        ? "Kumusta! Ako ang inyong AI agricultural assistant na powered ng advanced AI. Paano ko kayo matutulungan na ma-optimize ang inyong farming ngayon?"
        : "Hello! I'm your AI agricultural assistant powered by advanced AI. How can I help you optimize your farming today?";

    setMessages([
      {
        id: 1,
        text: welcomeMessage,
        sender: "ai",
        timestamp: new Date(),
      },
    ]);
  };

  const aiTools: AITool[] = [
    {
      id: "crop-analysis",
      title: "Crop Analysis",
      description: "Analyze crop health and get recommendations",
      icon: "🌱",
      action: () =>
        handleAIToolResponse(
          "crop-analysis",
          "Let me help you analyze your crop. What specific crop are you growing and what symptoms are you observing?"
        ),
    },
    {
      id: "weather-insights",
      title: "Weather Insights",
      description: "Get weather-based farming recommendations",
      icon: "🌤️",
      action: () =>
        handleAIToolResponse(
          "weather-insights",
          "I can provide weather-based recommendations. What are the current weather conditions in your area and what's the growth stage of your crops?"
        ),
    },
    {
      id: "pest-detection",
      title: "Pest Detection",
      description: "Identify and manage pest problems",
      icon: "🐛",
      action: () =>
        handleAIToolResponse(
          "pest-detection",
          "I can help you identify and manage pests. Can you describe what you're seeing on your crops and which crop is affected?"
        ),
    },
    {
      id: "soil-health",
      title: "Soil Health",
      description: "Monitor and improve soil conditions",
      icon: "🌍",
      action: () =>
        handleAIToolResponse(
          "general",
          "Soil health is crucial for good yields. Tell me about your current soil conditions, any testing results, or specific concerns you have."
        ),
    },
  ];

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    const currentMessage = inputMessage;
    setInputMessage("");
    setIsTyping(true);

    try {
      const response = await sendChatMessage(currentMessage, selectedLanguage);

      if (response.success) {
        const aiResponse: Message = {
          id: Date.now() + 1,
          text: response.response,
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiResponse]);
      } else {
        throw new Error(response.error || "Failed to get AI response");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting to the AI service. Please make sure the backend server is running and try again.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleAIToolResponse = (toolType: string, responseText: string) => {
    setIsTyping(true);
    const aiResponse: Message = {
      id: Date.now(),
      text: responseText,
      sender: "ai",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, aiResponse]);
    setIsTyping(false);
  };

  const handleAIResponse = (responseText: string) => {
    handleAIToolResponse("general", responseText);
  };

  const handleQuickQuestion = async (question: string) => {
    setInputMessage(question);

    const newMessage: Message = {
      id: Date.now(),
      text: question,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const response = await sendChatMessage(question, selectedLanguage);

      if (response.success) {
        const aiResponse: Message = {
          id: Date.now() + 1,
          text: response.response,
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiResponse]);
      } else {
        throw new Error(response.error || "Failed to get AI response");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting to the AI service. Please try again.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          AI Agricultural Assistant
        </h1>
        <p className="text-gray-600 text-lg">
          Get intelligent insights and recommendations for your farming
          operations
        </p>

        {/* Language Selector */}
        <div className="mt-4 flex items-center space-x-4">
          <span className="text-gray-700 font-medium">Language:</span>
          <div className="flex space-x-2">
            <button
              onClick={() => handleLanguageChange("english")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedLanguage === "english"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange("tagalog")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedLanguage === "tagalog"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Tagalog
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* AI Tools Section */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            AI Tools
          </h2>
          <div className="space-y-4">
            {aiTools.map((tool) => (
              <div
                key={tool.id}
                onClick={tool.action}
                className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow border border-gray-200 hover:border-green-300"
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{tool.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-6 bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-3">
              Today&apos;s Insights
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Weather Score:</span>
                <span className="font-semibold text-green-600">85/100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Soil Moisture:</span>
                <span className="font-semibold text-blue-600">Optimal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Growth Stage:</span>
                <span className="font-semibold text-yellow-600">Flowering</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md h-96 flex flex-col">
            {/* Chat Header */}
            <div className="bg-green-600 text-white p-4 rounded-t-lg">
              <h2 className="text-xl font-semibold">Chat with AI Assistant</h2>
              <p className="text-green-100 text-sm">
                Ask me anything about farming and agriculture
              </p>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <div className="text-sm whitespace-pre-line">
                      {message.text}
                    </div>
                    <p className="text-xs mt-1 opacity-75">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your farming question here..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={inputMessage.trim() === ""}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Quick Suggestions */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Quick Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "What's the best time to plant tomatoes?",
                "How do I improve soil fertility?",
                "Signs of nutrient deficiency in crops?",
                "Organic pest control methods?",
              ].map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-left bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-3 text-sm text-gray-700 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
