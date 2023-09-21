import React from "react";
import { Box, Image, Link } from "@chakra-ui/react";
import photos from "../../../data/photos.json";
import events from "../../../data/events.json";
import SinglePhotoCard from "../cards/SinglePhotoCard";
import SingleEventCard from "../cards/SingleEventCard";

interface SingleGalleryProps {
  isFame?: boolean;
  isSingleGallery?: boolean;
  galleryType: string;
}

export default function SingleGallery({
  isFame,
  isSingleGallery,
  galleryType,
}: SingleGalleryProps) {
  if (galleryType === "photo") {
    let filteredPhotos = photos;

    // Apply filters based on props
    if (isFame) {
      filteredPhotos = filteredPhotos.filter((photo) => photo.isFame === true);
    }

    if (isSingleGallery) {
      filteredPhotos = filteredPhotos.filter(
        (photo) => photo.eventId === "none"
      );
    }

    return (
      <Box px={"70px"}>
        <Box
          w="100%"
          maxW="100%"
          mx="auto"
          sx={{ columnCount: [1, 2, 3], columnGap: "70px" }}
        >
          {filteredPhotos.map((photo) => (
            <SinglePhotoCard photo={photo} key={photo.photoId} />
          ))}
        </Box>
      </Box>
    );
  } else {
    let filteredEvents = events;

    // Apply filters based on props

    return (
      <Box px={"70px"}>
        <Box
          w="100%"
          maxW="100%"
          mx="auto"
          sx={{ columnCount: [1, 2, 3], columnGap: "70px" }}
        >
          {filteredEvents.map((event) => (
            <SingleEventCard event={event} key={event.eventId} />
          ))}
        </Box>
      </Box>
    );
  }
}
