import authOptions from "@/lib/authoptions";
import { getServerSession } from "next-auth";
import React from "react";

const Header = async () => {
  const session = await getServerSession(authOptions);
  const logged = !!session;
  
  return <div>Header</div>;
};

export default Header;
