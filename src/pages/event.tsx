import HomeHero from "@/components/views/home/HomeHero";
import Footer from "@/components/widgets/footer/Footer";
import HimawariHeader from "@/components/widgets/header/HimawariHeader";
import Navbar from "@/components/widgets/navbar/Navbar";
import SingleGallery from "@/components/widgets/singleGallery/SingleGallery";
import { Box } from "@chakra-ui/react";
import React from "react";

const event = () => {
  return (
    <Box>
      <Navbar />
      <HimawariHeader
        title="Set of Moments"
        desc="These are all the events that I’ve attend before..."
      />
      <SingleGallery galleryType="event" isFame={true} />
      <Footer />
    </Box>
  );
};

export default event;
