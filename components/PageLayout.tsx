import { FC, ReactNode } from "react";
import { Box, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

const PageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const bgColor = useColorModeValue("white", "gray.900");
  const mainContentWidth = useBreakpointValue({
    base: "full",
    md: "calc(100vw - 250px)",
  });

  return (
    <Box w="100vw" h="100vh">
      <Sidebar />
      <Box
        position="absolute"
        top={0}
        right={0}
        h="full"
        w={mainContentWidth}
        bg={bgColor}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageLayout;
