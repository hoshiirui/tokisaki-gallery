import React from "react";
import { Box, Image, Link } from "@chakra-ui/react";

const srces = [
  {
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Smile as Bright as Sunflower",
    altTitle: "あなたのためにすべて",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Smile as Bright as Sunflower",
    altTitle: "あなたのためにすべて",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Smile as Bright as Sunflower",
    altTitle: "あなたのためにすべて",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Smile as Bright as Sunflower",
    altTitle: "あなたのためにすべて",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Smile as Bright as Sunflower",
    altTitle: "あなたのためにすべて",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Smile as Bright as Sunflower",
    altTitle: "あなたのためにすべて",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Smile as Bright as Sunflower",
    altTitle: "あなたのためにすべて",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Smile as Bright as Sunflower",
    altTitle: "あなたのためにすべて",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Smile as Bright as Sunflower",
    altTitle: "あなたのためにすべて",
  },
];

export default function SingleGallery() {
  return (
    <Box px={"70px"}>
      <Box
        w="100%"
        maxW="100%"
        mx="auto"
        sx={{ columnCount: [1, 2, 3], columnGap: "70px" }}
      >
        {srces.map((src, index) => (
          <Image
            key={index}
            w="100%"
            mb={10}
            display="inline-block"
            src={src.imageURL}
            alt="Alt"
          />
        ))}
      </Box>
    </Box>
  );
}
