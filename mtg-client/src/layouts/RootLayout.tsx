import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Button, Center, Flex, Grid, GridItem, Heading, Image, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import React from "react";
import getAllSets from "../helpers/getAllSets";
import { CardSet } from "../types/Cardset";
import SetsMenu from "../components/SetsMenu"


export default function RootLayout() {
  const [sets, setSets] = useState<{
    object: string;
    has_more: boolean;
    data: { [key: string]: CardSet[] };
  }>({
    object: "",
    has_more: false,
    data: {},
  });

  useEffect(() => {
    getAllSets()
      .then((data) => {
        // Group the sets data by set_type
        const groupedSets = data.data.reduce(
          (acc: { [key: string]: CardSet[] }, set: CardSet) => {
            const set_type = set.set_type;
            if (acc[set_type]) {
              acc[set_type].push(set);
            } else {
              acc[set_type] = [set];
            }
            return acc;
          },
          {}
        );
        // Update the state with the grouped sets data
        setSets({
          object: data.object,
          has_more: data.has_more,
          data: groupedSets,
        });
        
      })
      .catch((error) => console.log(`ERROR is ${error}`));
  }, []);
  return (
    <Grid templateColumns="repeat(6, 1fr)">
      <GridItem
        as="aside"
        colSpan={{base: 6, lg: 1, xl: 1}}
        bg="blackAlpha.200"
        minHeight={{base:"25vh", lg: "100vh"}}
        paddingBottom={{base: "20px", lg: "30px"}}
        paddingLeft={{base: "20px", lg: "30px"}}
        paddingRight={{base: "20px", lg: "30px"}}
      >
      <Flex as="nav" mb={"10px"} alignContent={"center"}><Heading paddingTop={"10px"}>Sets here</Heading></Flex>
        <SetsMenu sets = {sets} />
      </GridItem>
      <GridItem as="main" colSpan={{base: 6, lg: 5, xl: 5}}>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
