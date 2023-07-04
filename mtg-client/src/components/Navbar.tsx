import { Box, Flex, Heading, Text, Button, Spacer, HStack, Avatar } from "@chakra-ui/react";
import React from "react";




export default function Navbar() {
  return(
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">Hoarders United</Heading>
      <Spacer>trademark</Spacer>

      <HStack spacing="10px">
        <Avatar src={process.env.PUBLIC_URL + '/aspava.png'}/>
        <Text>Aspava</Text>
        <Button colorScheme="cyan">Logout</Button>
      </HStack>
    </Flex>
  )
}