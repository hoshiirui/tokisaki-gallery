import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";
import photos from "../../../data/photos.json";
import events from "../../../data/events.json";
import SinglePhotoCard from "../cards/SinglePhotoCard";
import SingleEventCard from "../cards/SingleEventCard";

interface SingleGalleryProps {
  isFame?: boolean;
  isSingleGallery?: boolean;
  isExistEventId?: string;
  galleryType: string;
  isShow?: boolean;
}

export default function SingleGallery({
  isFame,
  isSingleGallery,
  galleryType,
  isExistEventId,
  isShow,
}: SingleGalleryProps) {
  if (galleryType === "photo") {
    let filteredPhotos = photos;

    // Apply filters based on props
    if (isFame) {
      filteredPhotos = filteredPhotos.filter((photo) => photo.isFame === true);
    }

    if (isExistEventId) {
      filteredPhotos = filteredPhotos.filter(
        (photo) => photo.eventId === isExistEventId
      );
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
    if (isShow) {
      filteredEvents = filteredEvents.filter((event) => event.isShow === true);
    }

    return (
      <Box px={"70px"}>
        <Box
          w="100%"
          maxW="100%"
          mx="auto"
          sx={{ columnCount: [1, 2, 3], columnGap: "70px" }}
        >
          {filteredEvents.map((event) => (
            <Link
              key={event.eventId}
              href="/gallery/[eventId]"
              as={`/gallery/${event.eventId}`}
            >
              <SingleEventCard event={event} key={event.eventId} />
            </Link>
          ))}
        </Box>
      </Box>
    );
  }
}
