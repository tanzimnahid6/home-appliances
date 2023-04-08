import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignRight, FaCaretUp, FaCartPlus } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-gray-200 flex justify-between px-4 md:px-12 py-4  relative">
      <div className="text-3xl font-bold text-cyan-500">
        <NavLink to="/">TANZIM</NavLink>
      </div>
      <div className="md:flex hidden md:gap-6 items-center text-xl text-cyan-500 font-semibold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-violet-600" : "")}
          to="/"
        >
          Home{" "}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-violet-600" : "")}
          to="/shop"
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "text-violet-600" : "")}
        >
          <FaCartPlus></FaCartPlus>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-violet-600" : "")}
        >
          About Us
        </NavLink>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden flex items-center text-cyan-500 text-2xl"
      >
        {open ? <FaAlignRight></FaAlignRight> : <FaCaretUp></FaCaretUp>}
        {!open && (
          <div className="flex flex-col gap-2 items-center bg-cyan-200 mt-9  text-sm divide-violet-800 divide-y absolute top-8 right-2 p-3 rounded">
            <NavLink
              className={({ isActive }) => (isActive ? "text-violet-600" : "")}
              to="/"
            >
              Home{" "}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-violet-600" : "")}
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "text-violet-600" : "")}
            >
              <FaCartPlus></FaCartPlus>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-violet-600" : "")}
            >
              About Us
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
