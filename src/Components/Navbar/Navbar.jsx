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
      isActive
        ? "text-white relative after:content-[''] after:absolute after:right-0 after:bottom-0 after:h-full after:w-[4px] after:bg-white md:after:w-auto md:border-b-2 md:border-white md:pb-1"
        : "text-gray-300"
    }`;

  return (
    <>
      {/* Navbar Header */}
      <nav className="flex items-center justify-between pt-6 px-6 md:px-0 fixed top-0 left-0 w-full z-50">
        {/* Logo */}
        <div className="w-12 h-12 relative md:px-12 flex items-center justify-center">
          <div className="absolute w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <img src={star} alt="logo" className="w-6 h-6" />
          </div>
        </div>
        {/* Line - Desktop Only */}
        <div className="hidden md:block flex-1 mx-0 relative translate-x-15 z-50">
          <div className="h-px bg-gray-600 absolute left-0 right-0  z-20"></div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex bg-[#282B34]/50 backdrop-blur-lg px-12 py-6 justify-end">
          <ul className="flex ps-20 space-x-12">
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
            {isMenuOpen ? <i class="fa-solid fa-xmark"></i> : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 sm:w-2/5 bg-white/5 backdrop-blur-xl transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 pt-24 ps-8`}
      >
        <div className="flex flex-col space-y-8">
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