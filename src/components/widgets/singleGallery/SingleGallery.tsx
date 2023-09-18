import React from "react";
import { Box, Image, Link } from "@chakra-ui/react";
import photos from "../../../data/photos.json";
import SinglePhotoCard from "../cards/SinglePhotoCard";

export default function SingleGallery() {
  return (
    <Box px={"70px"}>
      <Box
        w="100%"
        maxW="100%"
        mx="auto"
        sx={{ columnCount: [1, 2, 3], columnGap: "70px" }}
      >
        {photos.map((photo) => (
          // <Image
          //   key={photo.photoId}
          //   w="100%"
          //   mb={10}
          //   display="inline-block"
          //   src={`/img/${photo.eventId != null ? photo.eventId : "single"}/${
          //     photo.photoId
          //   }.jpg`}
          //   alt="Alt"
          // />
          <SinglePhotoCard photo={photo} key={photo.photoId} />
        ))}
      </Box>
    </Box>
  );
}
