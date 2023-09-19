import { HStack, Stack, Image, Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

interface HimawariHeaderProps {
  title: string;
  desc: string;
}

const HimawariHeader = ({ title, desc }: HimawariHeaderProps) => {
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
      <HStack justifyContent={"space-between"} spacing={4}>
        <Stack>
          <Image h={"2vh"} src="/assets/header/diamond.png" />
        </Stack>
        <Stack>
          <Image h={"6vh"} src="/assets/header/himawari.png" />
        </Stack>
        <Stack>
          <Image h={"2vh"} src="/assets/header/diamond.png" />
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
        {title}
      </Box>
      <Box
        fontSize={"2xl"}
        fontWeight={"regular"}
        color="#72726c"
        fontStyle={"italic"}
        as="h6"
      >
        {desc}
      </Box>
    </Flex>
  );
};

export default HimawariHeader;
