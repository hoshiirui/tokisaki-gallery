import HomeHero from "@/components/views/home/HomeHero";
import Footer from "@/components/widgets/footer/Footer";
import HimawariHeader from "@/components/widgets/header/HimawariHeader";
import Navbar from "@/components/widgets/navbar/Navbar";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const aboutUs = () => {
  return (
    <Box>
      <Box minH={"100vh"}>
        <Head>
          <title>{"About Us - Tokisaki Gallery"}</title>
        </Head>
        <Navbar />
        <HimawariHeader
          title="Coming Soon!"
          desc="Stay tune for the next content!"
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default aboutUs;
