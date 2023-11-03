import {
  Box,
  HStack,
  VStack,
  Text,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
  function sendEmail() {
    const emailAddress = "bagus.astawan@gmail.com"; // Replace with the recipient's email address
    const subject = "Talk with Me"; // Replace with your desired subject

    // Create the mailto link
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}`;

    // Open the user's email client
    window.location.href = mailtoLink;
  }

  return (
    <VStack gap={"80px"}>
      <HStack px={"135px"} gap={"90px"}>
        <Box>
          <Image src="assets/aboutus/rangga/pp.jpg" alt="My PP"></Image>
        </Box>
        <VStack alignItems={"flex-start"} maxWidth={"585px"} gap={"16px"}>
          <Text fontStyle={"italic"} fontSize={"20px"}>
            Claris{" "}
            {/* <Link
              href="https://anastasia-tokisaki-gallery.vercel.app/"
              target="blank"
            > */}
            Anastasis
            {/* </Link> */}
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
            <Link
              href="https://www.linkedin.com/in/rangga-astawan/"
              target="blank"
            >
              <Button
                width={"286px"}
                height={"48px"}
                bg={"transparent"}
                border={"1px solid"}
                rounded={0}
                color={"#3A2E26"}
                _hover={{ bg: "#3A2E26", color: "white" }}
                gap={"10px"}
              >
                <FaLinkedin />
                <Text>LinkedIn</Text>
              </Button>
            </Link>
            {/* <Link href="https://www.instagram.com/kazedaa73/" target="blank">
              <Button
                width={"286px"}
                height={"48px"}
                bg={"transparent"}
                border={"1px solid"}
                rounded={0}
                color={"#3A2E26"}
                _hover={{ bg: "#3A2E26", color: "white" }}
                gap={"10px"}
              >
                <FaInstagram />
                <Text>Photography Instagram</Text>
              </Button>
            </Link> */}
            <Link href="#" onClick={sendEmail} isExternal>
              <Button
                width={"286px"}
                height={"48px"}
                bg={"transparent"}
                border={"1px solid"}
                rounded={0}
                color={"#3A2E26"}
                _hover={{ bg: "#3A2E26", color: "white" }}
                gap={"10px"}
              >
                <FaEnvelope />
                <Text>Contact Me via Email</Text>
              </Button>
            </Link>
          </HStack>
        </VStack>
      </HStack>
      <VStack gap={"56px"}>
        <VStack gap={"4px"}>
          <Text fontSize={"36px"} letterSpacing={"4px"}>
            FOLLOW MY INSTAGRAM(S)
          </Text>
          <Text fontSize={"22px"} fontStyle={"italic"} color={"#84847C"}>
            Get to know me more by following these instagrams of mine
          </Text>
          <HStack gap={"20px"} my={"40px"}>
            <Link href="https://www.instagram.com/kazedaa73/" target="blank">
              <Button
                width={"286px"}
                height={"48px"}
                bg={"transparent"}
                border={"1px solid"}
                rounded={0}
                color={"#3A2E26"}
                _hover={{ bg: "#3A2E26", color: "white" }}
                gap={"10px"}
              >
                <FaInstagram />
                <Text>Photography Instagram</Text>
              </Button>
            </Link>
            <Link
              href="https://www.instagram.com/okiya_rangga73/"
              target="blank"
            >
              <Button
                width={"286px"}
                height={"48px"}
                bg={"transparent"}
                border={"1px solid"}
                rounded={0}
                color={"#3A2E26"}
                _hover={{ bg: "#3A2E26", color: "white" }}
                gap={"10px"}
              >
                <FaInstagram />
                <Text>Personal Instagram</Text>
              </Button>
            </Link>
          </HStack>
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
