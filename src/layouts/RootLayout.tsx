import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar"
import { Grid, GridItem } from "@chakra-ui/react";

export default function RootLayout () {
  return(
  <Grid templateColumns="repeat(6, 1fr)">
    <GridItem
    as="aside"
    colSpan={1}
    bg="blackAlpha.200"
    minHeight="100vh"
    p="20px"
    >
      <span>sidebar here</span>
    </GridItem>
    <GridItem
    as="main"
    colSpan={5}
    >
      <Navbar/>
      <Outlet />
    </GridItem>
  </Grid>
  )
  
}