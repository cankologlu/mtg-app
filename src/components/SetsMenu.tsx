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
  list,
  Heading,
} from "@chakra-ui/react";
import { Box, Button, Grid, GridItem, Image, Link } from "@chakra-ui/react";
import { CardSet } from "../types/Cardset";

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

    <Menu isOpen={true} >
      <Box position={"relative"}
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
    <MenuList key={`panda${Math.random()*10}`}>
   {set_type !== "vanguard" && <MenuButton as={Heading} key={set_type} w="200px">
    {set_type}
    </MenuButton>}
        {sets.filter((set: CardSet) => set.name !== "Magic Online Avatars" && set.name !== "Vanguard Series")
        .map((set: CardSet) => (
          <MenuItem position={"relative"}
            key={set.id}
            maxW="120px"
            fontSize={"x-small"}
            transform={"none"}
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
  )
}