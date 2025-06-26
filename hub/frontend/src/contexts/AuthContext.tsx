"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: string;
  username: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check localStorage on mount
    if (typeof window !== "undefined") {
      const storedRole = localStorage.getItem("role");
      const storedUsername = localStorage.getItem("username");
      const storedUserId = localStorage.getItem("userId");

      if (storedRole && storedUsername && storedUserId) {
        setUser({
          id: storedUserId,
          username: storedUsername,
          role: storedRole,
        });
        setIsLoggedIn(true);
      }
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    setIsLoggedIn(true);
    
    // Store in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("role", userData.role);
      localStorage.setItem("username", userData.username);
      localStorage.setItem("userId", userData.id);
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    
    // Clear localStorage
    if (typeof window !== "undefined") {
      localStorage.removeItem("role");
      localStorage.removeItem("username");
      localStorage.removeItem("userId");
    }
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      
      // Update localStorage
      if (typeof window !== "undefined") {
        if (userData.role) localStorage.setItem("role", userData.role);
        if (userData.username) localStorage.setItem("username", userData.username);
        if (userData.id) localStorage.setItem("userId", userData.id);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
