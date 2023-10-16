import HomeHero from "@/components/views/home/HomeHero";
import SinglePhotoCard from "@/components/widgets/cards/SinglePhotoCard";
import Footer from "@/components/widgets/footer/Footer";
import HimawariHeader from "@/components/widgets/header/HimawariHeader";
import Navbar from "@/components/widgets/navbar/Navbar";
import SingleGallery from "@/components/widgets/singleGallery/SingleGallery";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>{"Homepage - Tokisaki Gallery"}</title>
      </Head>
      <Navbar />
      <HomeHero />
      <HimawariHeader
        title="Gallery of Fame"
        desc="This show the best photos I’ve taken so far..."
      />
      <SingleGallery galleryType="photo" isFame={true} />
      <Footer />
    </Box>
  );
}
