"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import { useState } from "react";
import { User } from "@/types/user";
import { axiosInstance } from "@/utils/axios-instance";
import { useRouter } from "next/navigation";

interface AuthContextType {
  getCurrentUser: () => void;
  logout: () => void;
  setUser: Dispatch<SetStateAction<User | null>>;
  setToken: Dispatch<SetStateAction<string | null>>;
  user: User | null;
}
export const AuthContext = createContext<AuthContextType>({
  getCurrentUser: () => {},
  logout: () => {},
  setUser: () => {},
  setToken: () => {},
  user: null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();
  const getCurrentUser = async () => {
    try {
      const res = await axiosInstance.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        setUser(res.data);
      }
    } catch (error) {
      console.error(error);
      setUser(null);
    } finally {
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/home");
  };
  useEffect(() => {
    if (token) {
      getCurrentUser();
    } else {
      setToken(localStorage.getItem("token"));
    }
  }, [token]);
  return (
    <AuthContext.Provider
      value={{
        logout,
        setToken,
        getCurrentUser,
        setUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
