import { VStack, Text, HStack, Image, Link } from "@chakra-ui/react";
import React from "react";
import SinglePortfolioCard from "../cards/SinglePortfolioCard";

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
          <Link href="aboutUs/mehome">
            <SinglePortfolioCard />
          </Link>
          <Link href="aboutUs/mehome">
            <SinglePortfolioCard />
          </Link>
          <Link href="aboutUs/mehome">
            <SinglePortfolioCard />
          </Link>
        </HStack>
        <HStack></HStack>
      </VStack>
    </VStack>
  );
};

export default PortfolioList;
