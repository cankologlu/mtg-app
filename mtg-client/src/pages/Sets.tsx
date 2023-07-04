import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Box, Grid, GridItem, Image, Link } from "@chakra-ui/react";
import { CardSet } from "../types/Cardset";
import { NavLink } from "react-router-dom";
import getAllSets from "../helpers/getAllSets";




export default function Sets() {
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
      console.log("data from getAllSets", data)
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
      console.log("sets from useEFfect:",sets)
    })
    .catch((error) => console.log(`ERROR is ${error}`));
}, []);

 
  
  type SetsMenuProps = {
    sets: {
      object: string;
      has_more: boolean;
      data: { [key: string]: CardSet[] };
    };
  };
  // const { sets } = props;
  console.log("sets are;", sets);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const loaded = () => {
  //   setIsLoaded(true)
  // }
  return (
    <Box
      position={"relative"}
      className="horse"
      bg="blue.200"
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
                <NavLink to={`/cards/${set.code}`}>
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
