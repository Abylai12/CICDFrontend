"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/user-context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const { logout, user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);
  return (
    <div className="w-full ">
      <nav className="flex items-center justify-end p-4 bg-gray-800 text-white">
        {user ? (
          <Button onClick={logout}>logout</Button>
        ) : (
          <Link href={"/login"}> login</Link>
        )}
      </nav>
      <div className="flex items-center justify-center h-screen  ">
        <h1>Hello home page</h1>
      </div>
    </div>
  );
};

export default page;
