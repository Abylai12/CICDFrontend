"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import Login from "@/components/auth/Login";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/utils/axios-instance";
import { useAuth } from "@/context/user-context";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setToken } = useAuth();
  const login = async (data: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post("/auth/signin", data);
      if (res.status === 200) {
        res.data && localStorage.setItem("token", res.data.token);
        setIsLoading(false);
        setToken(res.data.token);
        router.push("/home");
        toast.success("Login successful!");
      } else {
        toast.error("Login failed. Please try again.", res.data.message);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login. Please try again.");
      setIsLoading(false);
    }
    console.log("Login data:", data);
  };
  return (
    <div data-cy="login-page">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {isLoading ? <p>Loading...</p> : <Login login={login} />}
    </div>
  );
};

export default Page;
