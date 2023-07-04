import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Button, Center, Flex, Grid, GridItem, Heading, Image, Link, IconButton, CloseButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import getAllSets from "../helpers/getAllSets";
import { CardSet } from "../types/Cardset";
// import SetsMenu from "../components/SetsMenu"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import Sidebar from "../components/Sidebar"



export default function RootLayout() {
  const [display, changeDisplay] = useState("none")




  return (
    <Grid templateColumns="repeat(6, 1fr)">
      <GridItem 
      display={{ base: "none", md: "none", lg:"block" }}
      position={"relative"}
        as="aside"
        colSpan={{base: 6, lg: 1, xl: 1}}
        bg="blue.300"
        minHeight={{lg: "100vh"}}
        paddingBottom={{base: "20px", lg: "30px"}}
        paddingLeft={{base: "20px", lg: "30px"}}
        paddingRight={{base: "20px", lg: "30px"}}
        >
        <Sidebar/>
      {/* <Flex as="nav" mb={"10px"} alignContent={"center"}><Heading paddingTop={"10px"}>Sets here</Heading></Flex>
        <SetsMenu sets = {sets} /> */}
      </GridItem>
      <GridItem as="main" colSpan={{base: 6, lg: 5, xl: 5}}>
        
        
      <GridItem 
      display={display}
      // position={"relative"}
        // as="aside"
        bg="blackAlpha.200"
        // minHeight={{base:"25vh", lg: "100vh"}}
        paddingBottom={{base: "20px", lg: "30px"}}
        paddingLeft={{base: "20px", lg: "30px"}}
        paddingRight={{base: "20px", lg: "30px"}}
        width={"100vw"}
        zIndex={20}
        height={"100vh"}
        pos={"fixed"}
        top={"0"}
        overflow={"auto"}
        flexDirection={"column"}
      >
        <Flex justify={"flex-end"}>
          <IconButton
          mt={2}
          mr={2}
          aria-label="CLose Menu"
          size={"lg"}
          icon={<CloseIcon/>}
          onClick={() => changeDisplay("none")}/>
        </Flex>
      {/* <Flex as="nav" mb={"10px"} alignContent={"center"}><Heading paddingTop={"10px"}>Sets here</Heading></Flex>
        <SetsMenu sets = {sets} /> */}
      </GridItem>
        <Grid templateColumns="repeat(6, 1fr)">
          
        <GridItem
        alignItems={"center"}
         colSpan={1}
         display={{ base: "block", md: "block", lg:"none", xl:"none" }}>
        <IconButton
        aria-label="Open Menu"
        size={"lg"}
        icon={<HamburgerIcon/>}
        display={{ base: "block", md: "block", lg:"none", xl:"none" }}
        onClick={() => changeDisplay("flex")}/>
        </GridItem>
        <GridItem colSpan={6}>
        <Navbar />
        </GridItem>
        </Grid>
        <Outlet />
      </GridItem>
    </Grid>
  );
}
