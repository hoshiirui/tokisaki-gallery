import { VStack, Text, HStack, Image } from "@chakra-ui/react";
import React from "react";

const PortfolioList = () => {
  return (
    <VStack px={"135px"} gap={"56px"} pb={"60px"}>
      <VStack gap={"4px"}>
        <Text fontSize={"36px"} letterSpacing={"4px"}>
          MY PORTFOLIO
        </Text>
        <Text fontSize={"22px"} fontStyle={"italic"} color={"#84847C"}>
          Here is a few of my Avant Garde
        </Text>
      </VStack>
      <VStack>
        <HStack gap={"64px"}>
          <VStack maxW={"336px"} gap={"16px"}>
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
          <VStack maxW={"336px"} gap={"16px"}>
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
          <VStack maxW={"336px"} gap={"16px"}>
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
        </HStack>
        <HStack></HStack>
      </VStack>
    </VStack>
  );
};

export default PortfolioList;
