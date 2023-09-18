import { Flex, Box, Image, HStack } from "@chakra-ui/react";

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
  // Check if photo is undefined
  if (!photo) {
    return null; // Render nothing if photo is undefined
  }

  console.log("photo object:", photo);

  // Define your custom color value here
  const customColorValue = "white"; // Replace with your desired color value

  return (
    <Box mb={4} display={"inline-block"}>
      <Flex w="full" alignItems="center" justifyContent="center">
        <Box
          bg={customColorValue} // Use your custom color value
          maxW="sm"
          position="relative"
        >
          <Image
            src={`/img/${
              photo?.eventId !== "none" ? photo.eventId : "single"
            }/${photo.photoId}.jpg`}
          />

          <Box p="6">
            <HStack flexDirection="column">
              <Box color="#3A2E26" fontSize="sm">
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
  );
}

export default SinglePhotoCard;
