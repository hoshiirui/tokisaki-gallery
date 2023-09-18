import { HStack, Stack, Image, Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const HimawariHeader = () => {
  return (
    <Flex
      width={"100vw"}
      justifyContent={"space-between"}
      px={"70px"}
      py={"20px"}
      alignItems={"center"}
      direction={"column"}
      my={"50px"}
    >
      <HStack justifyContent={"space-between"} spacing={0}>
        <Stack>
          <Image w={"50%"} src="/assets/header/diamond.png" />
        </Stack>
        <Stack>
          <Image w={"50%"} src="/assets/header/himawari.png" />
        </Stack>
        <Stack>
          <Image w={"50%"} src="/assets/header/diamond.png" />
        </Stack>
      </HStack>
      <Box
        fontSize="5xl"
        textTransform={"uppercase"}
        fontWeight={"semibold"}
        letterSpacing={"3px"}
        as="h6"
        color="#3a2e26"
      >
        Exquisite Exhibition
      </Box>
      <Box
        fontSize={"2xl"}
        fontWeight={"regular"}
        color="#72726c"
        fontStyle={"italic"}
        as="h6"
      >
        Here's my photos I've taken so far. Feel free to look at it!
      </Box>
    </Flex>
  );
};

export default HimawariHeader;
