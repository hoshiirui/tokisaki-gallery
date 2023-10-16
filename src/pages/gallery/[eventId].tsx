import Footer from "@/components/widgets/footer/Footer";
import HimawariHeader from "@/components/widgets/header/HimawariHeader";
import Navbar from "@/components/widgets/navbar/Navbar";
import SingleGallery from "@/components/widgets/singleGallery/SingleGallery";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import events from "../../data/events.json";
import Head from "next/head";

const eventDetails = () => {
  const router = useRouter();
  const { eventId } = router.query;

  // Find the event data that matches the eventId
  const event = events.find((event) => event.eventId === eventId);

  function formatDate(dateString: string) {
    const options = { day: "numeric", month: "long", year: "numeric" as const };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <Box>
      <Head>
        <title>{event ? event.name : "Unknown Event"} - Tokisaki Gallery</title>
      </Head>
      <Navbar />
      {/* Use the event data to populate the component */}
      <HimawariHeader
        title={event ? event.name : "Event Not Found"}
        desc={
          event
            ? `${formatDate(event.date)} - ${event.location}`
            : "Event Not Found"
        }
        hasDownloadButton={event ? event.link : ""}
        hasShortExplanation={
          event ? event.description : "Event Not Found Description"
        }
      />
      <SingleGallery galleryType="photo" isExistEventId={event?.eventId} />
      <Footer />
    </Box>
  );
};

export default eventDetails;
