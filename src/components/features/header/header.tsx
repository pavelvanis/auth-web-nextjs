import authOptions from "@/lib/authoptions";
import { getServerSession } from "next-auth";
import React from "react";
import Navbar from "./header-navbar";

const Header = async () => {
  const session = await getServerSession(authOptions);
  const logged = !!session;

  return (
    <header>
      <Navbar />;
    </header>
  );
};

export default Header;
