"use client";

import { useAuth } from "@/context/user-context";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  const { user } = useAuth();
  const router = useRouter();
  console.log("user", user);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-200">{children}</div>
    </div>
  );
};

export default Layout;
