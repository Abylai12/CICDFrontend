"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/user-context";
import React from "react";

const Page = () => {
  const { logout, user } = useAuth();

  return (
    <div className="w-full ">
      <nav className="flex items-center justify-end p-4 bg-gray-800 text-white">
        {user && (
          <Button className="cursor-pointer" onClick={logout}>
            logout
          </Button>
        )}
      </nav>
      <div className="flex items-center justify-center h-screen  ">
        <h1>Hello home page</h1>
      </div>
    </div>
  );
};

export default Page;
