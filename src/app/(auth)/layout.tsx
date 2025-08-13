import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-200">{children}</div>
    </div>
  );
};

export default Layout;
