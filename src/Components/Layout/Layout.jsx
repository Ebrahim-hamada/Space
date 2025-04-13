import React from "react";
import Navbar from "./../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="absolute w-full">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
