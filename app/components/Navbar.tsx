"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="navbar bg-blue-800 text-white shadow-md">
      <div className="flex-1 active:text-white focus:text-white">
      <Link href="/" className="btn btn-ghost text-xl font-black" >     
        BookEaser
      </Link>
      </div>
      <nav className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:underline">
            <Link href="/">Home</Link>
          </li>

          <li className="hover:underline">
            <Link href="../bookings">Book</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
