import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="Navbar bg-gray-50 w-full h-fit border-2 border-bg-gray-100">
        <ul className="flex space-x-6 m-2 p-2 font-bold">
          <Link href={"/"}>
            <li>Home</li>{" "}
          </Link>
          <Link href={"/About"}>
            <li>About</li>{" "}
          </Link>
          <Link href={"/Contact"}>
            <li>Contact</li>{" "}
          </Link>
          <Link href={"/Blog"}>
            <li>Blog</li>{" "}
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
