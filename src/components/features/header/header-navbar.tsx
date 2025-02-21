"use client";
import {
  Navbar as DefaultNavbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import navList from "./header-navlist";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <DefaultNavbar
      placeholder="Navbar"
      className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          placeholder="title"
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Material Tailwind
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Button
              placeholder="login-btn"
              variant="text"
              size="sm"
              className="hidden lg:inline-block"
            >
              <Link href="/auth/login">Log in</Link>
            </Button>
            <Button
              placeholder="signup-btn"
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <Link href="/auth/register">Register</Link>
            </Button>
          </div>
          <IconButton
            placeholder="menu-btn"
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Button
            placeholder="login-btn"
            fullWidth
            variant="text"
            size="sm"
            className=""
          >
            <Link href="/auth/login">Log in</Link>
          </Button>
          <Button
            placeholder="signup-btn"
            fullWidth
            variant="gradient"
            size="sm"
            className=""
          >
            <Link href="/auth/register">Register</Link>
          </Button>
        </div>
      </Collapse>
    </DefaultNavbar>
  );
};

export default Navbar;
