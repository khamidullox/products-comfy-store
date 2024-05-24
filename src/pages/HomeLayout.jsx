import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoginSingUp from "../components/LoginSingUp";

function HomeLayout() {
  return (
    <>
      <LoginSingUp  />
      <Navbar />
      <Outlet />
    </>
  );
}

export default HomeLayout;
