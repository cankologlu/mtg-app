import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar"

export default function RootLayout () {
  return(
    <>
  
  <div>
    <Navbar/>
    <Outlet />
  </div>
  <div>hey there</div>
  </>)
  
}