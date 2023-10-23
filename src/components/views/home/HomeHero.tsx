import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomeHero() {
  const carouselData = [
    {
      backgroundImage: "assets/hero/mnd09.jpg",
      title: "A Moment That Blooms",
      description:
        "As the snow of white Christmas falling down, we made our first promise to stay with each other, creating a new love story that lasts forever...",
    },
    {
      backgroundImage: "assets/hero/mal01.jpg",
      title: "Preserve Your Moments",
      description:
        "The only real treasure is in your head. Memories are better than diamonds and nobody can steal them from you",
    },
    {
      backgroundImage: "assets/hero/mnd10.JPG",
      title: "A Moment That Shine",
      description:
        "Memory is a way of holding onto the things you love, the things you are, the things you never want to lose. Remembering is an act of resurrection, each repetition a vital layer of mourning, each one a healing layer",
    },
  ];

  const fontSizeTitle = useBreakpointValue({ base: "4xl", md: "6xl" });
  const fontSizeDescription = useBreakpointValue({ base: "lg", md: "xl" });

  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      renderIndicator={(clickHandler, isSelected, index) => (
        <div
          onClick={clickHandler}
          className={`custom-indicator ${isSelected ? "selected" : ""}`}
          key={index}
          style={{
            display: "inline-block",
            margin: "0 5px",
            cursor: "pointer",
          }}
        >
          <Image
            style={{ width: 60 }}
            src={
              isSelected
                ? "assets/hero/rs-bullet.png"
                : "assets/hero/rs-bullet-inactive.png"
            }
            alt={`Indicator ${index + 1}`}
          />
        </div>
      )}
    >
      {carouselData.map((slide, index) => (
        <div key={index}>
          <Flex
            w={"full"}
            h={"100vh"}
            style={{
              backgroundImage: `url('${slide.backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <VStack
              w={"full"}
              justify={"center"}
              px={8}
              background="rgba(0, 0, 0, 0.5)"
            >
              <Stack
                maxW={"6xl"}
                align={"flex-start"}
                spacing={6}
                alignItems={"center"}
              >
                <Text
                  color={"white"}
                  fontWeight={"normal"}
                  lineHeight={1.2}
                  textTransform={"uppercase"}
                  letterSpacing={"10px"}
                  fontSize={fontSizeTitle}
                >
                  {slide.title}
                </Text>
                <Text
                  color={"white"}
                  fontWeight={"light"}
                  fontStyle={"italic"}
                  lineHeight={1.2}
                  fontSize={fontSizeDescription}
                  maxW={"3xl"}
                >
                  {slide.description}
                </Text>
                <Stack direction={"row"}>
                  <Button
                    bg={"transparent"}
                    border={"1px solid"}
                    color={"white"}
                    _hover={{ bg: "blue.500" }}
                    rounded={0}
                    textTransform={"uppercase"}
                    letterSpacing={"3px"}
                    fontSize={"sm"}
                    fontWeight={"normal"}
                    px={"10"}
                    py={"6"}
                  >
                    Read More
                  </Button>
                </Stack>
              </Stack>
            </VStack>
          </Flex>
        </div>
      ))}
    </Carousel>
  );
}
