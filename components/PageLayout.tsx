import { FC, ReactNode } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

const PageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const bgColor = useColorModeValue("white", "gray.900");

  return (
    <Box w="100vw" h="100vh">
      <Sidebar />
      <Box h="full" w="full" bg={bgColor}>
        {children}
        main content
      </Box>
    </Box>
  );
};

export default PageLayout;
