// Navbar.tsx

import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  VStack,
  Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import NavDesktopButton from "./NavDesktopButton";
import NavMobileButton from "./NavMobileButton";

const navbarLists = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Gallery",
    url: "/gallery",
  },
  {
    id: 3,
    name: "Event",
    url: "/event",
  },
  {
    id: 4,
    name: "Story",
    url: "/story",
  },
  {
    id: 5,
    name: "About Us",
    url: "/aboutUs",
  },
  {
    id: 6,
    name: "Merch",
    url: "/merch",
  },
];

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Box
      position={
        router.pathname == "/" ? "absolute" : "inherit"
      } /* Position the navbar absolutely */
      top="0" /* Place it at the top of the page */
      left="0"
      right="0"
      width="100vw"
      px={{ base: "8", md: "70px" }}
      py="20px"
      zIndex="999"
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box w={150}>
          <Link href="/">
            <Image
              src={
                router.pathname == "/"
                  ? "/assets/tokisakilogo.png"
                  : "/assets/tokisakilogo-black.png"
              }
              alt="Tokisaki Logo"
            />
          </Link>
        </Box>
        <HStack spacing={"40px"} display={{ base: "none", md: "flex" }}>
          {navbarLists.map((navbarList) => {
            return (
              <NavDesktopButton
                key={navbarList.id}
                name={navbarList.name}
                url={navbarList.url}
              />
            );
          })}
        </HStack>
        <Button
          onClick={isMenuOpen === false ? openMenu : closeMenu}
          display={{ base: "block", md: "none" }}
          fontSize="lg"
          zIndex={"999"}
        >
          {isMenuOpen === false ? "☰" : "✕"}
        </Button>
      </Flex>
      {isMenuOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.9)"
          display={{ base: "block", md: "none" }}
          zIndex={"998"}
        >
          <VStack
            h="100%"
            justifyContent="center"
            alignItems="center"
            spacing={6}
          >
            {navbarLists.map((navbarList) => (
              <NavMobileButton
                key={navbarList.id}
                name={navbarList.name}
                url={navbarList.url}
              />
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
