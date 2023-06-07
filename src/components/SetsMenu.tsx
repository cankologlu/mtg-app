import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  List,
  Heading,
  ListItem,
} from "@chakra-ui/react";
import { Box, Button, Grid, GridItem, Image, Link } from "@chakra-ui/react";
import { CardSet } from "../types/Cardset";
import { NavLink } from "react-router-dom";

type SetsMenuProps = {
  sets: {
    object: string;
    has_more: boolean;
    data: { [key: string]: CardSet[] };
  };
};

export default function SetsMenu (props: SetsMenuProps ) {
  const { sets } = props 
 
  return (

    <Box position={"relative"}
    className="horse"
    bg="#FAD7A0"
    css={{
      "&::-webkit-scrollbar": {
        width: "4px",
      },
      "&::-webkit-scrollbar-track": {
        width: "px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#8ccef0",
        borderRadius: "24px",
      },
    }}
    overflowX="auto"
    maxHeight="600px"
    >
        <List>
  {Object.entries(sets.data).map(([set_type, sets]) => (
   <Box as={Heading} key={set_type} w="200px" fontSize="h4" p={4} >
    {set_type}
        {sets.map((set: CardSet) => (
          <ListItem 
          position={"relative"}
          key={set.id}
          maxW="120px"
          fontSize={"x-small"}
          transform={"none"}
          ><NavLink to={`/sets/${set.code}`}>
            {set.name}
            <Image
              src={set.icon_svg_uri}
              alt={set.name}
              boxSize="2rem"
              borderRadius="full"
              mr="12px"
              />
          </NavLink>
          </ListItem>
    ))}
    </Box>
  ))}
    </List>
  </Box>
  )
}