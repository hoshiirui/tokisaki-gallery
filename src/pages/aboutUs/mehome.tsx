import Footer from "@/components/widgets/footer/Footer";
import HimawariHeader from "@/components/widgets/header/HimawariHeader";
import Navbar from "@/components/widgets/navbar/Navbar";
import AboutMe from "@/components/widgets/section/AboutMe";
import PortfolioList from "@/components/widgets/section/PortfolioList";
import { Box, Image } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const mehome = () => {
  return (
    <Box>
      <Box minH={"100vh"}>
        <Head>
          <title>{"MeHome - Tokisaki Gallery"}</title>
        </Head>
        <Navbar />
        <HimawariHeader
          title="MeHome Application"
          desc="Here is everything you need to know about me"
        />
        <Image src="../img/single/tsy10.jpg" px={"135px"} width={"100vw"} />
      </Box>
      <Footer />
    </Box>
  );
};

export default mehome;
