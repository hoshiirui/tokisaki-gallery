import { Flex, Box, Image, HStack } from "@chakra-ui/react";
import photosData from "../../../data/photos.json"; // Import your photos JSON data

interface EventProps {
  event: {
    eventId: string;
    name: string;
    location: string;
    date: string;
    description: string;
    link: string;
    isFame: boolean;
  };
}

function formatDate(dateString: string) {
  const options = { day: "numeric", month: "long", year: "numeric" as const }; // Specify "year" as "numeric"
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}

function SingleEventCard({ event }: EventProps) {
  // Check if photo is undefined
  if (!event) {
    return null; // Render nothing if photo is undefined
  }

  const thumbnailPhoto = photosData.find(
    (photo: any) => photo.eventId === event.eventId && photo.isThumbnail
  );

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
          <Image src={`/img/${event.eventId}/${thumbnailPhoto?.photoId}.jpg`} />

          <Box py="6">
            <HStack flexDirection="column" alignItems={"flex-start"}>
              <Box color="#3A2E26" fontSize="sm" fontStyle={"italic"}>
                {event.location || "Default Alt Title"}
              </Box>
              <Box
                fontSize="xl"
                fontWeight="medium"
                as="h4"
                lineHeight="tight"
                letterSpacing={"3px"}
                textTransform={"uppercase"}
              >
                {event.name || "Default Title"}
              </Box>
              <Box fontSize="sm">
                {event.description || "Default Alt Title"}
              </Box>
              <Box fontSize="lg" fontWeight={"bold"}>
                {formatDate(event.date) || "Default Alt Title"}
              </Box>
            </HStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default SingleEventCard;
