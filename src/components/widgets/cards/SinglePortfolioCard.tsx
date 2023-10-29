import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SinglePortfolioCard = () => {
  return (
    <VStack
      maxW={"336px"}
      gap={"16px"}
      _hover={{
        transform: "scale(1.10)",
        transition: "transform 0.3s",
      }}
    >
      <Image src="assets/aboutus/rangga/portfolio/ptr1/test.jpg" />
      <VStack gap={"4px"}>
        <Text fontWeight={"bold"} letterSpacing={"1px"}>
          UI/UX Design
        </Text>
        <Text
          fontSize={"22px"}
          letterSpacing={"2px"}
          textTransform={"uppercase"}
        >
          MeHome Application
        </Text>
      </VStack>
    </VStack>
  );
};

export default SinglePortfolioCard;
