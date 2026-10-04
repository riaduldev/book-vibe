import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/books">Books</Link>
      </li>

      <li>
        <Link href="/listed-books">Listed Books</Link>
      </li>
      <li>
        <Link href="/">Pages to Read</Link>
      </li>
    </>
  );
  return (
    <nav className="bg-base-100 shadow-sm">

    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
            {links}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {" "}
        <button
          type="button"
          className="rounded-full border border-purple-500 px-5 py-2 font-semibold text-purple-600 transition-all duration-300 hover:bg-purple-50 hover:shadow-md active:scale-95"
          >
          {" "}
          Sign In{" "}
        </button>{" "}
        <button
          type="button"
          className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg active:scale-95"
          >
          {" "}
          Sign Up{" "}
        </button>{" "}
      </div>
    </div>
          </nav>
  );
};

export default Navbar;
