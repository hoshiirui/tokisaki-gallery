"use client";

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  HStack,
} from "@chakra-ui/react";

const data = {
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Smile as Bright as Sunflower",
  altTitle: "あなたのためにすべて",
};

interface RatingProps {
  rating: number;
  numReviews: number;
}

function SinglePhotoCard() {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        position="relative"
      >
        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        />

        <Box p="6">
          <HStack flexDirection="column">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              {data.altTitle}
            </Box>
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {data.name}
            </Box>
          </HStack>
        </Box>
      </Box>
    </Flex>
  );
}

export default SinglePhotoCard;
