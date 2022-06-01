import { FC, ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

const PageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box w="100vw" h="100vh">
      <Sidebar />
      <Box h="full" w="full">
        {children}
        main content
      </Box>
    </Box>
  );
};

export default PageLayout;
