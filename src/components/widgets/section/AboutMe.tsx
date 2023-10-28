import { Box, HStack, VStack, Text, Image, Button } from "@chakra-ui/react";
import React from "react";

const AboutMe = () => {
  return (
    <VStack gap={"80px"}>
      <HStack px={"135px"} gap={"90px"}>
        <Box>
          <Image src="assets/aboutus/rangga/pp.jpg" alt="My PP"></Image>
        </Box>
        <VStack alignItems={"flex-start"} maxWidth={"585px"} gap={"16px"}>
          <Text fontStyle={"italic"} fontSize={"20px"}>
            Claris Anastasis
          </Text>
          <Text fontSize={"32px"} fontWeight={"bold"} color={"#3A2E26"}>
            PUTU BAGUS RANGGA PERMANA PUTRA ASTAWAN
          </Text>
          <Text
            fontSize={"22px"}
            fontWeight={"bold"}
            fontStyle={"italic"}
            color={"rgba(58, 46, 38, 0.83)"}
            letterSpacing={"2px"}
          >
            UI/UX DESIGNER - PHOTOGRAPHER
          </Text>
          <Text lineHeight={"200%"} fontSize={"18px"} color={"#3A2E26"}>
            I am an experienced UI/UX Designer, photographer, and storyteller.
            Proven track record in web and mobile app design competitions, and
            finishing many design requests for about 10 events in the Faculty of
            Mathematics and Natural Sciences at Udayana University. Passionate
            about creating captivating visuals, capturing compelling moments,
            and crafting engaging narratives. Keen eye for detail, strong
            storytelling skills, and a drive for creativity and innovation. I
            strive to bring every project I undertake with stunning design and
            captivating storytelling.
          </Text>
          <HStack gap={"12px"}>
            <Button width={"286px"} height={"48px"}>
              LinkedIn
            </Button>
            <Button width={"286px"} height={"48px"}>
              LinkedIn
            </Button>
          </HStack>
        </VStack>
      </HStack>
      <VStack gap={"56px"}>
        <VStack gap={"4px"}>
          <Text fontSize={"36px"} letterSpacing={"4px"}>
            FOLLOW ME ON INSTAGRAM
          </Text>
          <Text fontSize={"22px"} fontStyle={"italic"} color={"#84847C"}>
            @okiya_rangga73
          </Text>
        </VStack>
        <VStack>
          <HStack gap={"50px"} zIndex={"999"}>
            <Image
              mt={"60px"}
              src="assets/aboutus/rangga/FL1.jpg"
              width={"155px"}
              height={"155px"}
            ></Image>
            <Image
              mb={"60px"}
              src="assets/aboutus/rangga/FL2.jpg"
              width={"155px"}
              height={"155px"}
            ></Image>
            <Image
              mt={"60px"}
              src="assets/aboutus/rangga/FL3.jpg"
              width={"155px"}
              height={"155px"}
            ></Image>
            <Image
              mb={"60px"}
              src="assets/aboutus/rangga/FL4.jpg"
              width={"155px"}
              height={"155px"}
            ></Image>
            <Image
              mt={"60px"}
              src="assets/aboutus/rangga/FL5.jpg"
              width={"155px"}
              height={"155px"}
            ></Image>
          </HStack>
          <Box
            position={"relative"}
            top={"-100px"}
            backgroundColor={"#F5F0EB"}
            height={"120px"}
            minW={"100vw"}
          ></Box>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default AboutMe;
