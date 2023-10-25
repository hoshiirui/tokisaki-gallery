import { useState } from "react";
import {
  Flex,
  Box,
  Image,
  HStack,
  Drawer, // Import Drawer and related components
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

interface PhotoProps {
  photo: {
    photoId: string;
    title: string;
    altTitle: string;
    eventId: string;
    isThumbnail: boolean;
    isFame: boolean;
  };
}

function SinglePhotoCard({ photo }: PhotoProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Check if photo is undefined
  if (!photo) {
    return null;
  }

  // Define your custom color value here
  const customColorValue = "white";

  return (
    <>
      <Box
        mb={4}
        display={"inline-block"}
        _hover={{
          transform: "scale(1.10)",
          transition: "transform 0.3s",
        }}
        onClick={() => setIsDrawerOpen(true)}
      >
        <Flex w="full" alignItems="center" justifyContent="center">
          <Box bg={customColorValue} maxW="sm" position="relative">
            <Image
              src={`/img/${
                photo?.eventId !== "none" ? photo.eventId : "single"
              }/${photo.photoId}.jpg`}
              alt={photo.title}
            />

            <Box p="6">
              <HStack flexDirection="column">
                <Box color="#3A2E26" fontSize="sm" textAlign={"center"}>
                  {photo.altTitle || "Default Alt Title"}
                </Box>
                <Box
                  fontSize="lg"
                  fontWeight="medium"
                  as="h4"
                  lineHeight="tight"
                  letterSpacing={"3px"}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                >
                  {photo.title || "Default Title"}
                </Box>
              </HStack>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        placement="top"
        onClose={() => setIsDrawerOpen(false)}
        size="full"
        trapFocus={false}
      >
        <DrawerOverlay onClick={() => setIsDrawerOpen(false)} />
        <DrawerContent
          p={0}
          bg="rgba(0, 0, 0, 0.5)"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <DrawerCloseButton color={"white"} />
          <Image
            src={`/img/${
              photo?.eventId !== "none" ? photo.eventId : "single"
            }/${photo.photoId}.jpg`}
            alt={photo.title}
            maxH="95vh"
            maxW="100vw"
            objectFit="contain"
            onClick={() => setIsDrawerOpen(false)}
          />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SinglePhotoCard;
