"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { RiShoppingCartLine, RiMenuLine } from "react-icons/ri";
import NavLink from "../buttons/NavLink";
import Cookies from "js-cookie";

const Navbar = () => {
  const isAuth = Cookies.get("auth");

  const handleLogout = () => {
    Cookies.remove("auth", { path: "/" });
    window.location.href = "/login";
  };

  const nav = (
    <>
      <li><NavLink href="/">Home</NavLink></li>
      <li><NavLink href="/products">Products</NavLink></li>
      <li><NavLink href="/about">About</NavLink></li>
      <li><NavLink href="/contact">Contact</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <RiMenuLine className="h-5 w-5" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <Logo />
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>

      <div className="navbar-end space-x-4">
        <Link className="btn btn-primary" href="/cart">
          <RiShoppingCartLine />
        </Link>

        {isAuth ? (
          <button onClick={handleLogout} className="btn btn-outline">
            Logout
          </button>
        ) : (
          <Link href="/login">
            <button className="btn btn-primary btn-outline">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;