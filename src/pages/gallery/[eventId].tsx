// pages/eventDetails.tsx

import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "@/components/widgets/navbar/Navbar";
import HimawariHeader from "@/components/widgets/header/HimawariHeader";
import SingleGallery from "@/components/widgets/singleGallery/SingleGallery";
import Footer from "@/components/widgets/footer/Footer";

import events from "../../data/events.json";

interface EventData {
  eventId: string;
  name: string;
  location: string;
  date: string;
  description: string;
  link: string;
}

const EventDetails: React.FC = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const [event, setEvent] = useState<EventData | null>(null);

  useEffect(() => {
    // Find the event data that matches the eventId
    const eventData = events.find((event) => event.eventId === eventId) || null;
    setEvent(eventData);
  }, [eventId]);

  // function formatDate(dateString: string) {
  //   const options = { day: "numeric", month: "long", year: "numeric" as const };
  //   const date = new Date(dateString);
  //   return date.toLocaleDateString(undefined, options);
  // }

  return (
    <Box>
      <Head>
        <title>{event ? event.name : "Unknown Event"} - Tokisaki Gallery</title>
      </Head>
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
      <SingleGallery galleryType="photo" isExistEventId={event?.eventId} />
      <Footer />
    </Box>
  );
};

export default EventDetails;
