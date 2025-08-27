"use client";

import { useAuth } from "@/context/user-context";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (loading) return;
    if (user) {
      router.push("/home");
    } else {
      router.push("/login");
    }
  }, [user, loading]);
  return <div className="">{children}</div>;
};

export default MainLayout;
