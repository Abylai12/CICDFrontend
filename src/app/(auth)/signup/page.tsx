"use client";

import SignUp from "@/components/auth/SignUp";
import { axiosInstance } from "@/utils/axios-instance";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const signup = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post("/auth/signup", data);
      if (res.status === 201) {
        res.data && localStorage.setItem("token", res.data.token);
        setIsLoading(false);
        toast.success("Sign up successful!");
        router.push("/login");
      } else {
        toast.error("Login failed. Please try again.");
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
    <div data-cy="signup-page">
      <h1 className="text-2xl font-bold mb-4">Sign up</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <SignUp signup={signup} data-cy="signup-component" />
      )}
    </div>
  );
};

export default Page;
