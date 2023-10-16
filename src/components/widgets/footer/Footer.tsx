import React from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

// Import your logo image

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("#3A2E26", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"100%"}
        px={"70px"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        {/* Replace the Logo component with an img element */}
        <img
          src={"assets/tokisakilogo-black.png"} // Use the imported logo image as the src
          alt="My Logo"
          height={32}
          width={120} // Set the width of the image
        />
        <Text fontSize={"lg"}>© 2023 Okiya Rangga. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={"YouTube"}
            href={"https://www.youtube.com/channel/UCB7ehsGS_spMDnI5VK80p5g"}
          >
            <FaYoutube />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/kazedaa73/"}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
