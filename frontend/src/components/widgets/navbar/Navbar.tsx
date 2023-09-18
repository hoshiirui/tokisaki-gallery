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
    url: "/about",
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
    <Flex
      width={"100vw"}
      justifyContent={"space-between"}
      px={"70px"}
      py={"20px"}
      alignItems={"center"}
    >
      <Box w={150}>
        <Image src="/assets/tokisakilogo-black.png" />
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
  );
};

export default Navbar;
