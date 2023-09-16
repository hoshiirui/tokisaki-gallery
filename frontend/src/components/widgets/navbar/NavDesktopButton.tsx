import { Box, Button, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

type props = {
  name: string;
  url: string;
};

const NavDesktopButton = ({ name, url }: props) => {
  const router = useRouter();
  return (
    <Stack>
      <Button
        variant={"unstyled"}
        color={router.pathname == url ? "white" : "whiteAlpha.400"}
        _hover={{ color: "white" }}
        letterSpacing={"3px"}
        textTransform="uppercase"
      >
        {name}
      </Button>
      {router.pathname == url ? (
        <Box width={"100%"} height={"2px"} bgColor={"white"} marginTop={-2} />
      ) : null}
    </Stack>
  );
};

export default NavDesktopButton;
