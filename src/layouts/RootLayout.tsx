import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Button, Grid, GridItem, Image, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import React from "react";
import getAllSets from "../helpers/getAllSets";
import { CardSet } from "../types/Cardset";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons'


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
        colSpan={1}
        bg="blackAlpha.200"
        minHeight="100vh"
        p="20px"
      >
          <>SETS</>
            <Menu isOpen={true} >
              <Box
              className="horse"
                bg=""
                css={{
                  "&::-webkit-scrollbar": {
                    width: "4px",
                  },
                  "&::-webkit-scrollbar-track": {
                    width: "6px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#8ccef0",
                    borderRadius: "24px",
                  },
                }}
                overflowX="auto"
                maxHeight="600px"
              >
          {Object.entries(sets.data).map(([set_type, sets]) => (
            <MenuList key={`panda${Math.random()*10}`} justifyContent={"center"}>
                <MenuButton as={Button} key={set_type} w="200px" >
            { set_type !== "vanguard" && set_type}
            </MenuButton>
                {set_type !== "vanguard" && sets.map((set: CardSet) => (
                  <MenuItem
                    key={set.id}
                    maxW="120px"
                    fontSize={"x-small"}
                  >
                    <Image
                      src={set.icon_svg_uri}
                      alt={set.name}
                      boxSize="2rem"
                      borderRadius="full"
                      mr="12px"
                    />
                    {set.name}
                  </MenuItem>
                  ))}
              </MenuList>
          ))}
          </Box>
            </Menu>
      </GridItem>
      <GridItem as="main" colSpan={5}>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
