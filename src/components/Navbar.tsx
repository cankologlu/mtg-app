import { Box, Flex, Heading, Text, Button, Spacer, HStack } from "@chakra-ui/react";
import React from "react";


export default function Navbar() {
  return(
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">Hoarders United</Heading>
      <Spacer>trademark</Spacer>

      <HStack spacing="10px">
        <Box bg="red.200" p="10px">A</Box>
        <Text>Aspava</Text>
        <Button colorScheme="cyan">Logout</Button>
      </HStack>
    </Flex>
  )
}