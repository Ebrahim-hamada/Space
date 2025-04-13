import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import star from "./../../assets/image/shared/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { id: 0, label: "HOME", path: "/" },
    { id: 1, label: "DESTINATION", path: "/destination" },
    { id: 2, label: "CREW", path: "/crew" },
    { id: 3, label: "TECHNOLOGY", path: "/technology" },
  ];

  const navLinkStyle = ({ isActive }) =>
    `tracking-widest text-sm font-light cursor-pointer whitespace-nowrap ${
      isActive ? "text-white border-b-2 border-white pb-1" : "text-gray-300"
    }`;

  return (
    <>
      {/* Navbar Header */}
      <nav className="flex items-center justify-between px-6 md:px-12 pt-6 fixed top-0 left-0 w-full z-50">
        {/* Logo */}
        <div className="w-12 h-12 relative flex items-center justify-center">
          <div className="absolute w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <img src={star} alt="logo" className="w-6 h-6" />
          </div>
        </div>
        {/* Line - Desktop Only */}
        <div className="hidden md:block flex-1 mx-1 relative translate-x-5 z-50">
          <div className="h-px bg-gray-600 absolute left-10 right-0  z-10"></div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex bg-opacity-20 backdrop-blur-md px-12 py-6">
          <ul className="flex space-x-12">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink to={item.path} className={navLinkStyle}>
                  <span className="font-bold mr-2">0{item.id}</span>{" "}
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
          >
            {isMenuOpen ? <i className="fa-solid fa-x "></i> : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 sm:w-2/5  bg-opacity-70 backdrop-blur-xl transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 pt-24 px-6`}
      >
        <div className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={navLinkStyle}
            >
              <span className="font-bold mr-2">0{item.id}</span> {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
