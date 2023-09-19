import React from "react";
import { Box, Image, Link } from "@chakra-ui/react";
import photos from "../../../data/photos.json";
import SinglePhotoCard from "../cards/SinglePhotoCard";

interface SingleGalleryProps {
  isFame?: boolean;
  isSingleGallery?: boolean;
}

export default function SingleGallery({
  isFame,
  isSingleGallery,
}: SingleGalleryProps) {
  let filteredPhotos = photos;

  // Apply filters based on props
  if (isFame) {
    filteredPhotos = filteredPhotos.filter((photo) => photo.isFame === true);
  }

  if (isSingleGallery) {
    filteredPhotos = filteredPhotos.filter((photo) => photo.eventId === "none");
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
}
