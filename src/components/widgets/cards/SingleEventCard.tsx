import { Flex, Box, Image, HStack } from "@chakra-ui/react";
import photosData from "../../../data/photos.json";

interface EventProps {
  event: {
    eventId: string;
    name: string;
    location: string;
    date: string;
    description: string;
    link: string;
    isFame: boolean;
    isShow: boolean;
  };
}

function formatDate(dateString: string) {
  const options = {
    day: "numeric" as const,
    month: "long" as const,
    year: "numeric" as const,
  };
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
    <Box
      mb={4}
      display={"inline-block"}
      _hover={{
        transform: "scale(1.10)",
        transition: "transform 0.3s",
      }}
    >
      <Flex w="full" alignItems="center" justifyContent="center">
        <Box
          bg={customColorValue} // Use your custom color value
          maxW="sm"
          position="relative"
        >
          <Image
            src={`/img/${event.eventId}/${thumbnailPhoto?.photoId}.jpg`}
            alt={event.name}
          />

          <Box py="6">
            <HStack flexDirection="column" alignItems={"flex-start"} gap={0}>
              <Box color="#3A2E26" fontSize="md" fontStyle={"italic"}>
                {event.location || "Default Alt Title"}
              </Box>
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                letterSpacing={"3px"}
                textTransform={"uppercase"}
                marginBottom={"3"}
              >
                {event.name || "Default Title"}
              </Box>
              <Box fontSize="sm">
                {event.description.slice(0, 80) + "...  " ||
                  "Default Alt Title"}
                <b>Read More</b>
              </Box>
              <Box fontSize="xl" fontWeight={"bold"}>
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
