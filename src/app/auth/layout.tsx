import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-1 flex justify-center items-center">{children}</div>
  );
};

export default AuthLayout;
