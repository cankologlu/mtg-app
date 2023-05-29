import { Box, Flex, Heading, Text, Button, Spacer } from "@chakra-ui/react";
import React from "react";


export default function Navbar() {
  return(
    <Flex as="nav" p="10px">
      <Heading as="h1">Hoarders United</Heading>
      <Spacer>trademark</Spacer>
      <Box bg="red.200" p="10px">A</Box>
      <Text>Aspava</Text>
      <Button bg="blue.200">Logout</Button>
    </Flex>
  )
}