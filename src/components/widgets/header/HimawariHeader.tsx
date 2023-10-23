import {
  HStack,
  Stack,
  Image,
  Box,
  Flex,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface HimawariHeaderProps {
  title: string;
  desc: string;
  hasShortExplanation?: string;
  hasDownloadButton?: string;
}

const HimawariHeader = ({
  title,
  desc,
  hasShortExplanation,
  hasDownloadButton,
}: HimawariHeaderProps) => {
  return (
    <Flex
      width={"100vw"}
      justifyContent={"space-between"}
      px={"70px"}
      py={"20px"}
      alignItems={"center"}
      direction={"column"}
      my={"50px"}
      gap={"32px"}
    >
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        direction={"column"}
      >
        <HStack justifyContent={"space-between"} spacing={4}>
          <Stack>
            <Image h={"2vh"} src="/assets/header/diamond.png" alt="diamond1" />
          </Stack>
          <Stack>
            <Image h={"6vh"} src="/assets/header/himawari.png" alt="himawari" />
          </Stack>
          <Stack>
            <Image h={"2vh"} src="/assets/header/diamond.png" alt="diamond2" />
          </Stack>
        </HStack>
        <Box
          textAlign={"center"}
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
      {hasShortExplanation && (
        <Text
          fontSize={"xl"}
          fontWeight={"semibold"}
          color="#3a2e26"
          as="p"
          textAlign={"center"}
        >
          {hasShortExplanation}
        </Text>
      )}
      {hasDownloadButton && (
        <Link href={hasDownloadButton}>
          <Button
            bg={"transparent"}
            border={"1px solid"}
            color={"#3a2e26"}
            _hover={{ bg: "black", color: "white" }}
            rounded={0}
            textTransform={"uppercase"}
            letterSpacing={"3px"}
            fontSize={"sm"}
            fontWeight={"bold"}
            px={"10"}
            py={"6"}
          >
            Download Photos Here!
          </Button>
        </Link>
      )}
    </Flex>
  );
};

export default HimawariHeader;
