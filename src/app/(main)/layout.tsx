import authOptions from "@/lib/authoptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const MainLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);

  // When the session is not present, the user is redirected to the sign-in page.
  if (!session) return redirect("/api/auth/signin");

  return <>{children}</>;
};

export default MainLayout;
