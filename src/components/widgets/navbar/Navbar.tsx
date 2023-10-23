import { Box, Button, Flex, HStack, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import NavDesktopButton from "./NavDesktopButton";

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

  return (
    <Box
      position={
        router.pathname == "/" ? "absolute" : "inherit"
      } /* Position the navbar absolutely */
      top="0" /* Place it at the top of the page */
      left="0"
      right="0"
      width="100vw"
      px="70px"
      py="20px"
      zIndex="999"
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box w={150}>
          <Image
            src={
              router.pathname == "/"
                ? "/assets/tokisakilogo.png"
                : "/assets/tokisakilogo-black.png"
            }
            alt="Tokisaki Logo"
          />
        </Box>
        <HStack spacing={"40px"}>
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
      </Flex>
    </Box>
  );
};

export default Navbar;
