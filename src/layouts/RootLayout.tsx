import { Outlet } from "react-router-dom";
import React from "react";

export default function RootLayout () {
  return(
    <>
  <div>hey there</div>
  <div>
    <Outlet />
  </div>
  </>)
  
}