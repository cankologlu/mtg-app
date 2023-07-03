import React from "react";
import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { CalendarIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faScroll,
  faBookOpenReader,
  faMortarPestle,
  faPersonRays,
  faGopuram,
} from "@fortawesome/free-solid-svg-icons";
import { customHoverStyles } from "../styles/styles";

export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4} marginTop={10}>
      <ListItem as={Box} {...customHoverStyles}>
        <NavLink to="/">
          <Flex alignItems={"center"}>
            <FontAwesomeIcon icon={faGopuram} style={{ color: "#ffffff" }} />
            <Text paddingLeft={3}>Home</Text>
          </Flex>
        </NavLink>
      </ListItem>

      <ListItem as={Box} {...customHoverStyles}>
        <NavLink to="/profile">
          <Flex alignItems={"center"}>
            <FontAwesomeIcon icon={faPersonRays} style={{ color: "#ffffff" }} />
            <Text paddingLeft={3}>Profile</Text>
          </Flex>
        </NavLink>
      </ListItem>

      <ListItem as={Box} {...customHoverStyles}>
        <NavLink to="/sets">
          <Flex alignItems={"center"}>
            <FontAwesomeIcon icon={faScroll} style={{ color: "#ffffff" }} />
            <Text paddingLeft={3}>Sets</Text>
          </Flex>
        </NavLink>
      </ListItem>

      <ListItem as={Box} {...customHoverStyles}>
        <NavLink to="/auctions">
          <Flex alignItems={"center"}>
            <FontAwesomeIcon icon={faGavel} style={{ color: "#f3f4f7" }} />
            <Text paddingLeft={3}>Auctions</Text>
          </Flex>
        </NavLink>
      </ListItem>

      <ListItem as={Box} {...customHoverStyles}>
        <NavLink to="/collections">
          <Flex alignItems={"center"}>
            <FontAwesomeIcon icon={faBookOpenReader} />
            <Text paddingLeft={3}>Collections</Text>
          </Flex>
        </NavLink>
      </ListItem>
    </List>
  );
}

// transition: box-shadow 200ms ease 0s, transform 200ms ease 0s;
// transform: translate(4px, -4px);
// box-shadow: -8px 8px 0 var(--color-navy);
