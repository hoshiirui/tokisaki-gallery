import HomeHero from "@/components/views/home/HomeHero";
import Navbar from "@/components/widgets/navbar/Navbar";
import SingleGallery from "@/components/widgets/singleGallery/SingleGallery";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <HomeHero />
      <SingleGallery />
    </Box>
  );
}
