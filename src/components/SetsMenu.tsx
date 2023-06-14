import React, { useState } from "react";
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
  Text,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
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

export default function SetsMenu(props: SetsMenuProps) {
  const { sets } = props;
  console.log("sets are;", sets);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const loaded = () => {
  //   setIsLoaded(true)
  // }
  return (
    <Box
      position={"relative"}
      className="horse"
      bg="#FAD7A0"
      borderRadius={"l"}
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
          <Box
            as={Text}
            key={set_type}
            w="200px"
            fontSize="xl"
            p={4}
            fontWeight={600}
          >
            {`${
              set_type[0][0].toUpperCase() +
              set_type.replace("_", " ").slice(1, set_type.length)
            }`}
            {sets.map((set: CardSet) => (
              <ListItem
                display={"grid"}
                gridAutoFlow="row dense"
                position={"relative"}
                key={set.id}
                width={"auto"}
                fontSize={"x-small"}
                transform={"none"}
              >
                <NavLink to={`/sets/${set.code}`}>
                  <Box as={Grid}>
                    {/* <SkeletonCircle isLoaded={isLoaded}> */}
                    <Image
                    //  onLoad={() => loaded()}
                      fallbackSrc="https://www.seekpng.com/png/full/24-240917_unicorn-unicorns-emoji-emoji-horse-freetoedit-unicorn-emoji.png"
                      src={set.icon_svg_uri}
                      alt={set.name}
                      boxSize="2rem"
                      borderRadius="full"
                      mr="12px"
                    />
                    {/* </SkeletonCircle> */}
                    {set.name}
                  </Box>
                </NavLink>
              </ListItem>
            ))}
          </Box>
        ))}
      </List>
    </Box>
  );
}
