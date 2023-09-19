import { Box, Button, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type props = {
  name: string;
  url: string;
};

const NavDesktopButton = ({ name, url }: props) => {
  const router = useRouter();
  return (
    <Link href={url}>
      <Stack>
        {router.pathname == "/" ? (
          <Button
            variant={"unstyled"}
            color={
              router.pathname == url ? "white" : "rgba(255, 255, 255, 0.6)"
            }
            _hover={{ color: "white" }}
            letterSpacing={"3px"}
            textTransform="uppercase"
          >
            {name}
          </Button>
        ) : (
          <Button
            variant={"unstyled"}
            color={router.pathname == url ? "#3A2E26" : "rgba(58, 46, 38, 0.5)"}
            _hover={{ color: "#3A2E26" }}
            letterSpacing={"3px"}
            textTransform="uppercase"
          >
            {name}
          </Button>
        )}
        {router.pathname == url ? (
          <Box
            width={"100%"}
            height={"2px"}
            bgColor={router.pathname == "/" ? "white" : "#3A2E26"}
            marginTop={-2}
          />
        ) : null}
      </Stack>
    </Link>
  );
};

export default NavDesktopButton;
