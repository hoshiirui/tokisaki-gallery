import Footer from "@/components/widgets/footer/Footer";
import HimawariHeader from "@/components/widgets/header/HimawariHeader";
import Navbar from "@/components/widgets/navbar/Navbar";
import SingleGallery from "@/components/widgets/singleGallery/SingleGallery";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import events from "../../data/events.json";

const eventDetails = () => {
  const router = useRouter();
  const { eventId } = router.query;

  // Find the event data that matches the eventId
  const event = events.find((event) => event.eventId === eventId);

  useEffect(() => {
    // Fetch gallery details based on 'galleryId'
    console.log("Gallery ID:", eventId);
  }, [eventId]);

  return (
    <Box>
      <Navbar />
      {/* Use the event data to populate the component */}
      <HimawariHeader
        title={event ? event.name : "Event Not Found"}
        desc={event ? `${event.date} - ${event.location}` : "Event Not Found"}
        hasDownloadButton={event ? event.link : ""}
        hasShortExplanation={
          event ? event.description : "Event Not Found Description"
        }
      />
      <SingleGallery galleryType="photo" isFame={true} />
      <Footer />
    </Box>
  );
};

export default eventDetails;
