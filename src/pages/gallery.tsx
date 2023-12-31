import React from "react";
import HomeHero from "@/components/views/home/HomeHero";
import SinglePhotoCard from "@/components/widgets/cards/SinglePhotoCard";
import Footer from "@/components/widgets/footer/Footer";
import HimawariHeader from "@/components/widgets/header/HimawariHeader";
import Navbar from "@/components/widgets/navbar/Navbar";
import SingleGallery from "@/components/widgets/singleGallery/SingleGallery";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

const gallery = () => {
  return (
    <Box>
      <Head>
        <title>{"Photo Recollections - Tokisaki Gallery"}</title>
      </Head>
      <Navbar />
      <HimawariHeader
        title="Exquisite Exhibition"
        desc="Here is my photos that I’ve taken so far. Feel free to look at it!"
      />
      <SingleGallery galleryType="photo" isSingleGallery={true} />
      <Footer />
    </Box>
  );
};

export default gallery;
