import HomeHero from "@/components/views/home/HomeHero";
import Footer from "@/components/widgets/footer/Footer";
import HimawariHeader from "@/components/widgets/header/HimawariHeader";
import Navbar from "@/components/widgets/navbar/Navbar";
import AboutMe from "@/components/widgets/section/AboutMe";
import PortfolioList from "@/components/widgets/section/PortfolioList";
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
          title="About Me"
          desc="Here is everything you need to know about me"
        />
        <AboutMe />
        <PortfolioList />
      </Box>
      <Footer />
    </Box>
  );
};

export default aboutUs;
