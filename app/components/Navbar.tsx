import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex flex-col justify-between items-center lg:flex-row md:flex-row bg-blue-800 text-white shadow-md">
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

          <li className="hover:underline">
            <Link href="../login">Login</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
