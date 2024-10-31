// src/lib/auth-context.ts
'use client'
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from './authStore';
import { loginUser, logoutUser, getCurrentUser } from './account';
import { User } from '../types/user';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

// Create the AuthContext
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { setUser, clearUser } = useAuthStore();
  const user = useAuthStore((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser();
      if (user) setUser(user);
      else clearUser();
      setIsLoading(false);
    };
    fetchUser();
  }, [setUser, clearUser]);

  const login = async (email: string, password: string) => {
    await loginUser(email, password);
    const user = await getCurrentUser();
    if (user) {
      setUser(user);
      router.push('/dashboard');
    }
  };

  const logout = async () => {
    await logoutUser();
    clearUser();
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// The hook to access AuthContext values
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
