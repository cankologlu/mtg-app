import React, { useState, useEffect } from "react";
import { Button, Flex, HStack, List, ListItem, Spacer, Text } from "@chakra-ui/react";
import { Box, Grid, GridItem, Image, Link } from "@chakra-ui/react";
import { CardSet } from "../types/Cardset";
import { NavLink } from "react-router-dom";
import getAllSets from "../helpers/getAllSets";
import { customHoverStyles } from "../styles/styles";

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
        console.log("data from getAllSets", data);
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
        console.log("sets from useEFfect:", sets);
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
  return (
    <Box
      position={"relative"}
      className="horse"
      bg="orange.200"
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
      maxHeight="100vh"
    >
      <List>
        {Object.entries(sets.data).map(([set_type, sets]) => (
          <Box
            as={Grid}
            key={set_type}
            w="auto"
            fontSize="3xl"
            p={4}
            fontWeight={600}
            
          >
            <Grid justifyContent={"center"} >{`${
              set_type[0][0].toUpperCase() +
              set_type.replace("_", " ").slice(1, set_type.length)
            }`}</Grid>
            {sets.map((set: CardSet) => (
              <ListItem
                display={"grid"}
                // gridAutoFlow="column dense"
                position={"relative"}
                key={set.id}
                width={"auto"}
                fontSize={"x-small"}
                transform={"none"}
                className="panda"
                {...customHoverStyles}
              >
                <NavLink to={`/cards/${set.code}`}>
                  <Flex alignItems="center">
                    <Box m="12px">
                      <Image
                        fallbackSrc="https://www.seekpng.com/png/full/24-240917_unicorn-unicorns-emoji-emoji-horse-freetoedit-unicorn-emoji.png"
                        src={set.icon_svg_uri}
                        alt={set.name}
                        boxSize="2rem"
                        borderRadius="full"
                      />
                    </Box>
                    <Box>
                      <Text fontSize={"17px"}>{set.name}</Text>
                    </Box>
                    <Spacer/>
                    <Text mr={10} fontSize={"15px"}>{`${set.card_count} Cards`}</Text>
                    <Text fontSize={"15px"}>{`Release Date: ${set.released_at}`}</Text>
                    <HStack></HStack>
                  </Flex>
                </NavLink>
              </ListItem>
            ))}
          </Box>
        ))}
      </List>
    </Box>
  );
}
